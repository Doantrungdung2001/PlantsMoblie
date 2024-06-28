import publicHttp from "./Http/publicHttp.config";
const GARDEN_SERVICE_TEMPLATE = {
  getServiceTemplate: async (farmId) => {
    return await publicHttp({
      method: "GET",
      url: `/gardenServiceTemplate/farm/${farmId}`,
    })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  },
};

export default GARDEN_SERVICE_TEMPLATE;
