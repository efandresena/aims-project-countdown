export async function onRequest(context) {
  const { request, env } = context;

  if (request.method === 'GET') {
    const { results } = await env.DB.prepare(
      'SELECT name, text, created_at FROM messages ORDER BY created_at DESC LIMIT 100'
    ).all();
    return new Response(JSON.stringify(results), {
      headers: { 'Content-Type': 'application/json' },
    });
  }

  if (request.method === 'POST') {
    let body;
    try {
      body = await request.json();
    } catch {
      return new Response(JSON.stringify({ error: 'invalid JSON' }), { status: 400 });
    }
    const { name, text } = body;
    if (!name || !text || name.length > 50 || text.length > 500) {
      return new Response(JSON.stringify({ error: 'name (max 50) and text (max 500) required' }), { status: 400 });
    }
    await env.DB.prepare(
      'INSERT INTO messages (name, text) VALUES (?, ?)'
    ).bind(name.trim(), text.trim()).run();
    return new Response(JSON.stringify({ success: true }), {
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return new Response('Method not allowed', { status: 405 });
}
