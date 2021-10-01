exports.handler = async (event) => {
  // TODO implement
  const response = {
    statusCode: 200,

    headers: {
      'Access-Control-Allow-Origin':
        'https://master.d2wpvnzd012uwi.amplifyapp.com',
      'Access-Control-Allow-Headers': '*',
    },
    body: JSON.stringify('Hello from Lambda!'),
  }
  return response
}
