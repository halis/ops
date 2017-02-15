
module.exports = (app, dir) => {
  const getFilePath = (string, type) => string.split(`/${type}`)[1].split('?')[0];
  const serve = (type) => {
    app.use(`/${type}/`, (req, res) => {
      const filePath = getFilePath(req.originalUrl, type);
      res.sendFile(`${dir}/${type}/${filePath}`);
    });
  };
  ['css', 'fonts', 'img', 'js'].forEach(serve);
};
