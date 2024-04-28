import publicHttp from "./Http/publicHttp.config";

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
};

export default GARDEN_SERVICE_REQUEST;
