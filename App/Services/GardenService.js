import publicHttp from "./Http/publicHttp.config";
import privateHttp from "./Http/privateHttp.config";
const GARDEN = {
  getAllGardensByFarmId: async (farmId) => {
    return await publicHttp({
      method: "GET",
      url: `garden/farm/${farmId}`,
    })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  },

  getGardenByGardenId: async (gardenId) => {
    return await publicHttp({
      method: "GET",
      url: `garden/${gardenId}`,
    })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  },
  // not use

  getAllGardenByClient: async (clientId) => {
    return await publicHttp({
      method: "GET",
      url: `garden/client/${clientId}`,
    })
      .then((res) => {
        console.log("res;", res);
        return res;
      })
      .catch((err) => {
        console.log("err: ", err);
        return err;
      });
  },
  getAllDeliveryByClient: async (clientId) => {
    return await publicHttp({
      method: "GET",
      url: `garden/client/${clientId}/delivery`,
    })
      .then((res) => {
        console.log("res;", res);
        return res;
      })
      .catch((err) => {
        console.log("err: ", err);
        return err;
      });
  },
  getPlanFarmingByGarden: async (gardenId) => {
    return await publicHttp({
      method: "GET",
      url: `garden/${gardenId}/plantFarmingProjects`,
    })
      .then((res) => {
        console.log("res;", res);
        return res;
      })
      .catch((err) => {
        console.log("err: ", err);
        return err;
      });
  },
  getAllProcessByGarden: async (gardenId) => {
    return await publicHttp({
      method: "GET",
      url: `garden/${gardenId}/processProjects`,
    })
      .then((res) => {
        console.log("res;", res);
        return res;
      })
      .catch((err) => {
        console.log("err: ", err);
        return err;
      });
  },

  getCameraExtraction: async (gardenId) => {
    return await publicHttp({
      method: "GET",
      url: `garden/${gardenId}/objectDetections`,
    })
      .then((res) => {
        console.log("res;", res);
        return res;
      })
      .catch((err) => {
        console.log("err: ", err);
        return err;
      });
  },

  getLiveCamera: async (gardenId) => {
    return await publicHttp({
      method: "GET",
      url: `garden/${gardenId}/camera`,
    })
      .then((res) => {
        console.log("res;", res);
        return res;
      })
      .catch((err) => {
        console.log("err: ", err);
        return err;
      });
  },

  updateDeliverybyClient: async (gardenId, deliveryId, data) => {
    return await privateHttp({
      method: "PATCH",
      url: `garden/${gardenId}/client/delivery/${deliveryId}`,
      data,
    })
      .then((res) => {
        console.log("res;", res);
        return res;
      })
      .catch((err) => {
        console.log("err: ", err);
        return err;
      });
  },

  updateGardenByClient: async (gardenId, data) => {
    return await privateHttp({
      method: "PATCH",
      url: `garden/client/${gardenId}`,
      data,
    })
      .then((res) => {
        console.log("res;", res);
        return res;
      })
      .catch((err) => {
        console.log("err: ", err);
        return err;
      });
  },

  deleteGardenByClient: async (gardenId) => {
    return await privateHttp({
      method: "DELETE",
      url: `garden/client/${gardenId}`,
    })
      .then((res) => {
        console.log("res;", res);
        return res;
      })
      .catch((err) => {
        console.log("err: ", err);
        return err;
      });
  },

  addRequestInGarden: async (gardenId, data) => {
    return await privateHttp({
      method: "POST",
      url: `garden/${gardenId}/request`,
      data,
    })
      .then((res) => {
        console.log("res;", res);
        return res;
      })
      .catch((err) => {
        console.log("err: ", err);
        return err;
      });
  },
};

export default GARDEN;
