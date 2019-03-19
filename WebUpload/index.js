require('alamode')()
const webUpload = require('./web-upload')

module.exports = async (context, req) => {
  let perl, body, status = 200
  try {
    ({ perl, ...body } = await webUpload(context, req))
  } catch (err) {
    body = { error: err.message, stack: err.stack }
    status = 500
  }
  return {
    status,
    body: `${JSON.stringify(body, null, 2)}\n\n==
This is a deployed from zip function.
${perl.code ? perl.code : ''}${perl.stderr ? perl.stderr : ''}${perl.stdout}`,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': req.headers.origin,
    },
  }
}