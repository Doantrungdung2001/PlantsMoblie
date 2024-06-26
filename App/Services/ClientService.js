import publicHttp from "./Http/publicHttp.config";
import privateHttp from "./Http/privateHttp.config";

const CLIENT = {
  getClientById: async (clientId) => {
    return await privateHttp({
      method: "GET",
      url: `/client/${clientId}`,
    })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  },
  updateInfo: async (data) => {
    return await privateHttp({
      method: "PATCH",
      url: `/client`,
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
export default CLIENT;
