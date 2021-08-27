var AWS = require("aws-sdk");
const randomstring = require("randomstring");

var s3 = new AWS.S3({
  accessKeyId: "AKIAT6WJXODR2MA37IUL",
  secretAccessKey: "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",
  region: "eu-west-1",
});

export const store = (file, filename) => {
    var objectPath = `${filename}`;
    return new Promise((resolve, reject) => {
      s3.putObject(
        {
          Bucket: "topicimages",
          Key: objectPath,
          Body:file ,
          ACL: "public-read",
        },
        (err) => {
          if (err) console.log(err);
          else {
            resolve(filename);
          }
        }
      );
    });
  };