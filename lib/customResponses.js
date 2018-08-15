function customResponses(req, res, next) {
  res.notFound = function notFound() {
    const err = new Error('Not found: The requested resource could not be found but may be available again in the future. Subsequent requests by the client are permissible.');
    err.status = 404;

    throw err;
  };

  res.unauthorized = function unauthorized() {
    const err = new Error('Unauthorized - check local storage, re-register');
    err.status = 401;

    throw err;
  };

  next();
}

module.exports = customResponses;
