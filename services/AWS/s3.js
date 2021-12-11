/* eslint-disable no-undef */
const { s3 } = require('./config');

const uploadFile = (bucketName, file) => {
  return s3
    .upload({
      Bucket: bucketName,
      Key: 'test.jpg', // Calculate to be unique
      Body: file,
    })
    .promise();
};

const listBuckets = () => {
  return s3.listBuckets().promise();
};

const createBucket = (bucketName) => {
  return s3
    .createBucket({
      Bucket: bucketName,
      CreateBucketConfiguration: {
        LocationConstraint: process.env.AWS_S3_REGION,
      },
    })
    .promise();
};

const listBucketObjects = (bucketName) => {
  return s3
    .listObjects({
      Bucket: bucketName,
    })
    .promise();
};

const deleteBuckets = (bucketName) => {
  // To delete bucket it must be empty.
  return s3
    .deleteBucket({
      Bucket: bucketName,
    })
    .promise();
};

const getBucketCORS = (bucketName) => {
  // Returns CORS Polciy of a bucket
  return s3.getBucketCors(bucketName).promise();
};

const setBucketCORS = (bucketName, corsConfig) => {
  // Update Bucket Cors
  const configObject = {};

  configObject.AllowedHeaders =
    corsConfig.allowedHeaders.length > 0 ? corsConfig.allowedHeaders : null;

  configObject.AllowedMethods =
    corsConfig.AllowedMethods.length > 0
      ? corsConfig.AllowedMethods
      : ['GET', 'POST', 'DELETE'];

  configObject.AllowedOrigins =
    corsConfig.AllowedOrigins.length > 0 ? corsConfig.AllowedOrigins : ['*'];

  configObject.ExposeHeaders =
    corsConfig.ExposeHeaders.length > 0 ? corsConfig.ExposeHeaders : null;

  configObject.MaxAgeSeconds = +corsConfig.MaxAgeSeconds
    ? +corsConfig.MaxAgeSeconds
    : 3000;

  const corsRules = new Array(configObject);
  return s3
    .putBucketCors({
      Bucket: bucketName,
      CORSConfiguration: { CORSRules: corsRules },
    })
    .promise();
};

module.exports = {
  listBuckets,
  createBucket,
  listBucketObjects,
  deleteBuckets,
  getBucketCORS,
  setBucketCORS,
  uploadFile,
};
