var AWS = require("aws-sdk");
const randomstring = require("randomstring");

var s3 = new AWS.S3({
  accessKeyId: "AKIAX2HSUYRSZ5UWUJWW",
  secretAccessKey: "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",
  region: "eu-central-1",
});

export const store = (file, filename) => {
    var objectPath = `${filename}`;
    return new Promise((resolve, reject) => {
      s3.putObject(
        {
          Bucket: "topic-images1",
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

  // https://topic-images1.s3.eu-central-1.amazonaws.com/613efe077f28371220267633_1631518215202_Vxc3Xcbi.jpg
  // https://topic-images1.s3.eu-west-1.amazonaws.com/613efe077f28371220267633_1631518215202_Vxc3Xcbi.jpg