/* eslint-disable no-undef */
module.exports.processFileForUpload = (file, paramObject) => {
  const s3Params = {
    Bucket:
      paramObject.bucketName === null
        ? process.env.AWS_DEFAULT_BUCKET
        : paramObject.bucketName,
    Key:
      paramObject.fileName === null
        ? new Date().toISOString() + '.' + paramObject.fileType
        : paramObject.fileName + '.' + paramObject.fileType,
    Body: file,
  };
  return s3Params;
};
