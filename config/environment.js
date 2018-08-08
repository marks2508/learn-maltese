const port  = process.env.PORT || 4000;
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/learn-maltese';
const secret = process.env.SECRET || 'f^dh@CVis--[P';

module.exports = { port, dbURI, secret };
