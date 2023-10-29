const AWS = require("aws-sdk");
const config = new AWS.Config({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

AWS.config.update(config);

AWS.config.getCredentials(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected to AWS successfully");
  }
});

exports.S3 = new AWS.S3();

exports.AWS;
