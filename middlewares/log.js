const log = (req, _, next) => {
  console.log(`${req.method} ${req.url}`, {
    query: { ...req.query },
    params: { ...req.params },
    body: { ...req.body },
  });
  next();
};

module.exports = { log };
