module.exports = (req, resp, next) => {
  resp.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  resp.setHeader('Access-Control-Allow-Methods', '*');
  resp.setHeader('Access-Control-Allow-Headers', '*');
  next();
};
