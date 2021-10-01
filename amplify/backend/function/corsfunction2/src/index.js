exports.handler = async (event) => {
  // TODO implement
  const response = {
    statusCode: 200,

    headers: {
      'Access-Control-Allow-Origin':
        'https://fcu8gugsb0.execute-api.us-east-1.amazonaws.com/dev',
      'Access-Control-Allow-Headers': '*',
    },
    body: JSON.stringify('Hello from Lambda!'),
  }
  return response
}
