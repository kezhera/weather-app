import axios from "axios";

type apiType = (method: string, url: string) => any;

const api: apiType = (method, url) =>
  new Promise((resolve, reject) => {
    axios({
      url,
      method,
    }).then(
      (response) => {
        resolve(response.data);
      },
      (error) => {
        reject(error);
      }
    );
  });

const Request = {
  get: (url: string) => api("get", url),
};

export default Request;
