module.exports.logRequest = (req, res, next) => {
  console.log("HTTP Method ", req.method, " to the endPoint ", req.url);
  next();
};
