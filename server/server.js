const pem = require('pem');
const util = require('util');
const createCertificate = util.promisify(pem.createCertificate);

module.exports = async (listener) => {
  try {
    const keys = await createCertificate({ days: 365, selfSigned: true });
    const httpsOptions = {
      key: keys.serviceKey,
      cert: keys.certificate,
    };
    const { createServer } = require('https');
    return createServer(httpsOptions, listener);
  } catch (e) {
    const { createServer } = require('http');
    return createServer(listener);
  }
};
