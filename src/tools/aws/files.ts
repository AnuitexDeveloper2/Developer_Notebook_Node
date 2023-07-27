var AWS = require("aws-sdk");
const randomstring = require("randomstring");

var s3 = new AWS.S3({
  accessKeyId: "AKIAX2HSUYRS5Y3KSB3V",
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