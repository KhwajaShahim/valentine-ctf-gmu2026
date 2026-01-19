module.exports = (req, res) => {
  const messages = {
    "1": "To: Alex — You make my day. - Secret Admirer",
    "2": "To: Sam — Your smile is undefeated. - Secret Admirer",
    "3": "To: Jamie — Meet me by the roses at 7. - Secret Admirer",
    "14": "To: YOU — Here’s the secret: FLAG{valentines_idor_matchmaker}"
  };

  const id = (req.query.id || "1").toString();
  const message = messages[id];

  if (!message) {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.end(`No message found for id=${id}\n\nTry: /medium?id=14`);
    return;
  }

  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.end(`💘 Matchmaker Mix-Up\n\nMessage ID: ${id}\n\n${message}\n\nHint: Try other IDs.`);
};
