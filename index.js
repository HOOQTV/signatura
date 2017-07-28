'use strict';

const crypto = require('crypto');

/**
 * Signs a request.
 *
 * @param {String} method - The HTTP method, e.g. GET, POST, PUT.
 * @param {String} href - The full path of request URL including its query string.
 * @param {String} secret - The shared secret.
 * @param {Object} payload - The payload of the request, relevan for POST, PUT and PATCH method.
 */
module.exports = (method, href, secret, payload) => {
    if ([ 'POST', 'PUT', 'PATCH' ].indexOf(method) >= 0) {
        payload = JSON.stringify(payload);
    }

    // Calculate the payload
    const hmac = crypto.createHmac('sha1', secret);
    if (payload) {
        hmac.update(payload);
    }
    return hmac.update(href).digest('base64');
};
