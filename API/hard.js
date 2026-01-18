module.exports = (req, res) => {
  const note = (req.query.note || "Roses are red, violets are blue...").toString();
  const secret = "FLAG{valentines_love_note_renderer}";

  // Intentional "template-like" bug for beginners:
  const rendered = note.split("{{secret}}").join(secret);

  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.end(`
    <html>
      <head>
        <meta charset="utf-8" />
        <title>Love Note Renderer</title>
        <style>
          body { font-family: Arial, sans-serif; max-width: 760px; margin: 40px auto; }
          .card { padding: 18px; border: 1px solid #ddd; border-radius: 14px; }
          input { width: 100%; padding: 10px; border-radius: 10px; border: 1px solid #ccc; }
          .preview { margin-top: 14px; padding: 12px; border-radius: 12px; background: #f7f7f7; }
          .hint { opacity: .7; margin-top: 12px; }
        </style>
      </head>
      <body>
        <div class="card">
          <h2>💌 Love Note Renderer</h2>
          <p>Type a note, and we’ll “render” it into a cute card.</p>

          <form method="GET" action="/hard">
            <input name="note" value="${escapeHtml(note)}" />
          </form>

          <div class="preview">
            <b>Preview:</b>
            <div>${escapeHtml(rendered)}</div>
          </div>

          <div class="hint">
            Hint: try <code>{{secret}}</code>
          </div>
        </div>
      </body>
    </html>
  `);

  function escapeHtml(s) {
    return s
      .split("&").join("&amp;")
      .split("<").join("&lt;")
      .split(">").join("&gt;")
      .split('"').join("&quot;")
      .split("'").join("&#039;");
  }
};
