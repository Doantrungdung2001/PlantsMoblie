import publicHttp from "./Http/publicHttp.config";
import privateHttp from "./Http/privateHttp.config";

const GARDEN_SERVICE_REQUEST = {
  getGardenServiceRequest: async (farmId) => {
    return await publicHttp({
      method: "GET",
      url: `/gardenServiceRequest/farm/${farmId}?sort=ctime`,
    })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  },

  getAllGardenServiceRequestbyClient: async () => {
    return await privateHttp({
      method: "GET",
      url: `/gardenServiceRequest/user/waiting`,
    })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  },

  addGardenServiceRequest: async (data) => {
    return await privateHttp({
      method: "POST",
      url: `/gardenServiceRequest`,
      data,
    })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  },
  deleteGardenServiceRequest: async (gardenServiceRequestId) => {
    return await privateHttp({
      method: "DELETE",
      url: `/gardenServiceRequest/${gardenServiceRequestId}`,
      data,
    })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  },
};

export default GARDEN_SERVICE_REQUEST;
