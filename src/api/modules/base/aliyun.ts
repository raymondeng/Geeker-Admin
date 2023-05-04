import request from "/@/utils/request";
import { AliyunCredential } from "/@/api/base/interfaceDefinition";
import { getSchoolFileKey } from "/@/utils/file";

const api = {
  AliyunStsTokenCredential: "/utilities/aliyun-sts-token-credential",
  SchoolWxWorkImgUploadToAliyun: "/utilities/school-wx-work-img-upload-to-aliyun"
};

export function getSchoolAliyunStsTokenCredential() {
  return request.get(api.AliyunStsTokenCredential);
}

export function uploadSchoolWxWorkImgToAliyun(send: object) {
  return request.post("utils/school-wx-work-img-upload-to-aliyun", send);
}

export function uploadSchoolFileKeyListToAliyun(
  resultFiles: string[],
  fileFolder: string,
  successFunction: any,
  failFunction: any
) {
  getSchoolAliyunStsTokenCredential().then(result => {
    const credential = <AliyunCredential>(<unknown>result);
    const OSS = require("ali-oss");
    const client = new OSS({
      region: credential.oss_region, // 服务器集群地区
      accessKeyId: credential.access_key_id, // OSS帐号
      accessKeySecret: credential.access_key_secret, // OSS 密码
      stsToken: credential.security_token,
      bucket: credential.oss_bucket // 阿里云上存储的 Bucket
    });
    let fileKeyList = [] as string[];
    async function putBuffer(theFile: any, theFileFolder: string) {
      try {
        const fileKey = getSchoolFileKey(theFile.name, credential, theFileFolder);
        // object-name可以自定义为文件名（例如file.txt）或目录（例如abc/test/file.txt）的形式，实现将文件上传至当前Bucket或Bucket下的指定目录。
        const result = await client.put(fileKey, theFile);
        console.log(result);
        fileKeyList.push(fileKey);
      } catch (e) {
        console.log(e);
        failFunction(e);
      }
    }
    resultFiles.forEach(file => {
      putBuffer(file, fileFolder);
    });
    if (successFunction) {
      successFunction(fileKeyList);
    }
  });
}

export function uploadSchoolImageToAliOssCloud(file: any, fileFolder: string) {
  return new Promise((resolve, reject) => {
    getSchoolAliyunStsTokenCredential().then(result => {
      const credential = <AliyunCredential>(<unknown>result);
      const OSS = require("ali-oss");
      const client = new OSS({
        region: credential.oss_region, // 服务器集群地区
        accessKeyId: credential.access_key_id, // OSS帐号
        accessKeySecret: credential.access_key_secret, // OSS 密码
        stsToken: credential.security_token,
        bucket: credential.oss_bucket // 阿里云上存储的 Bucket
      });

      async function putBuffer(theFile: any, theFileFolder: string) {
        try {
          const fileKey = getSchoolFileKey(theFile.name, credential, theFileFolder);
          // object-name可以自定义为文件名（例如file.txt）或目录（例如abc/test/file.txt）的形式，实现将文件上传至当前Bucket或Bucket下的指定目录。
          const result = await client.put(fileKey, theFile);
          console.log(result);
          resolve(fileKey);
        } catch (e) {
          reject(e);
        }
      }
      putBuffer(file, fileFolder);
    });
  });
}

export function getFullOSSUrl(fileKey: string) {
  if (fileKey && fileKey.length > 0) {
    return "http://ssap.oss-cn-chengdu.aliyuncs.com/" + fileKey;
  } else {
    return "";
  }
}
