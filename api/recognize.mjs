// Netlify serverless function: takes a fridge photo (base64) and returns
// recognised ingredients via the Gemini API. The API key lives only in the
// server environment (GEMINI_API_KEY), never in client code.
export async function handler(event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Method not allowed' }) };
  }
  const key = process.env.GEMINI_API_KEY;
  if (!key) {
    return { statusCode: 500, body: JSON.stringify({ error: 'Server not configured: GEMINI_API_KEY is missing' }) };
  }
  let body;
  try { body = JSON.parse(event.body); } catch {
    return { statusCode: 400, body: JSON.stringify({ error: 'Invalid JSON' }) };
  }
  const { imageBase64, mimeType } = body || {};
  if (!imageBase64 || !mimeType) {
    return { statusCode: 400, body: JSON.stringify({ error: 'imageBase64 and mimeType are required' }) };
  }
  const prompt =
    'Look at this fridge or food photo. List the food ingredients you can identify. ' +
    'Reply ONLY with a JSON array of lowercase English ingredient words, e.g. ["tomato","egg","rice"]. ' +
    'Maximum 10 items. If you cannot identify any food, reply [].';
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${encodeURIComponent(key)}`;
  const resp = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{
        parts: [
          { text: prompt },
          { inline_data: { mime_type: mimeType, data: imageBase64 } }
        ]
      }],
      generationConfig: { temperature: 0.1, maxOutputTokens: 200 }
    })
  });
  if (!resp.ok) {
    return { statusCode: 502, body: JSON.stringify({ error: `Gemini API error ${resp.status}` }) };
  }
  const data = await resp.json();
  const text = data?.candidates?.[0]?.content?.parts?.[0]?.text || '[]';
  let ingredients;
  try { ingredients = JSON.parse(text.trim().replace(/^```(json)?|```$/g, '')); } catch {
    ingredients = [];
  }
  if (!Array.isArray(ingredients)) ingredients = [];
  return {
    statusCode: 200,
    body: JSON.stringify({ ingredients: ingredients.map((x) => String(x).toLowerCase().slice(0, 40)) })
  };
}
