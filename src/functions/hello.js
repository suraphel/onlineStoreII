// for sysnc fuctions
// caller: url : /.netlify/functons/hello

// testing serverless functions with netlify

exports.handler = async function (event, constext) {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "hello Suraphel" }),
  };
};
