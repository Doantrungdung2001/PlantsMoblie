import privateHttp from "./Http/privateHttp.config";

const SEARCH_FARM = {
  getFarmFilter: async (data) => {
    return await privateHttp({
      method: "POST",
      url: `farm/search`,
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
export default SEARCH_FARM;
