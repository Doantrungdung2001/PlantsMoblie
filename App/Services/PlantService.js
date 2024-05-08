import publicHttp from "./Http/publicHttp.config";
import privateHttp from "./Http/privateHttp.config";

const PLANT = {
  getPlantFromFarm: async (farmId) => {
    return await publicHttp({
      method: "GET",
      url: `/plant/farm/${farmId}?sort=ctime`,
    })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  },
  getAllPlantsRecommend: async () => {
    return await publicHttp({
      method: "GET",
      url: `/plant/recommend`,
    })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  },
};
export default PLANT;
