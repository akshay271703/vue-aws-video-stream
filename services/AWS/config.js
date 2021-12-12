/* eslint-disable no-undef */
const S3 = require('aws-sdk/clients/s3');

const s3 = new S3({
  apiVersion: process.env.AWS_S3_API_VERSION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
  region: process.env.AWS_S3_REGION,
});

module.exports = {
  s3,
};
