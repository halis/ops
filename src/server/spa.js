
const startsWithPublic = string => string.match(/^\/public/);

module.exports = (app, dir) => {
  app.use((req, res, next) => {
    if (startsWithPublic(req.originalUrl)) {
      next();
      return;
    }
    res.sendFile(`${dir}/index.html`);
  });
};
