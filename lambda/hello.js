// For more info, check https://docs.netlify.com/functions/build-with-javascript
module.exports.handler = async function(event, context) {
  console.log("queryStringParameters", event.queryStringParameters)
  const {password} = event.queryStringParameters;
  return {
    // return null to show no errors
    statusCode: 200, // http status code
    body: JSON.stringify({
      url: password === 'Klr3d5ByGg' ? "0128ALDJCkdjf902scxmz9jdd3" : false
    })
  }
}

// Now you are ready to access this API from anywhere in your Gatsby app! For example, in any event handler or lifecycle method, insert:
// fetch("/.netlify/functions/hello")
//    .then(response => response.json())
//    .then(console.log)
// For more info see: https://www.gatsbyjs.org/blog/2018-12-17-turning-the-static-dynamic/#static-dynamic-is-a-spectrum
