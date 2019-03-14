require('alamode')()
const webUpload = require('./web-upload')

module.exports = async (context, req) => {
  let body, status = 200
  try {
    body = await webUpload(context, req)
  } catch (err) {
    body = { error: err.message, stack: err.stack }
    status = 500
  }
  return {
    status,
    body: JSON.stringify(body, null, 2),
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': req.headers.origin,
    },
  }
}