import axios from "axios";

const apikey = "apikey 3tkOM2gx5sROLOEtdu0VSa:5LfdAuAbg9cnFhmgPL17LL";
const BASE_URL = "https://api.collectapi.com/news";

export class BaseService {
  getFullPath(path) {
    return BASE_URL + "/" + path;
  }
  get(path) {
    return axios
      .get(this.getFullPath(path), {
        headers: {
          Authorization: apikey,
          "content-type": "application/json",
        },
      })
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }
}
