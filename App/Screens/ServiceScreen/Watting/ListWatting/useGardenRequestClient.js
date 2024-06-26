import { useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import GARDEN_SERVICE_REQUEST from "../../../../Services/GardenRequestService";

export default function useGardenRequest() {
  const parseDataGardenRequest = useCallback((data) => {
    // Map through the data and extract necessary fields
    const allGardenRequestClient = data.map((gardenReqeust) => {
      // Initialize an empty array to collect all plants from different lists
      let listplant = [];

      // Function to extract plant details from a given list
      const extractPlantDetails = (plantList) => {
        return plantList.map((plant) => ({
          plant_name: plant.plant_name,
          plant_thumb: plant.plant_thumb,
          plant_type: plant.plant_type,
        }));
      };

      // Extract plants from herbList
      if (gardenReqeust.herbList && gardenReqeust.herbList.length > 0) {
        listplant = listplant.concat(
          extractPlantDetails(gardenReqeust.herbList)
        );
      }

      // Extract plants from leafyList
      if (gardenReqeust.leafyList && gardenReqeust.leafyList.length > 0) {
        listplant = listplant.concat(
          extractPlantDetails(gardenReqeust.leafyList)
        );
      }

      // Extract plants from rootList
      if (gardenReqeust.rootList && gardenReqeust.rootList.length > 0) {
        listplant = listplant.concat(
          extractPlantDetails(gardenReqeust.rootList)
        );
      }

      // Extract plants from fruitList
      if (gardenReqeust.fruitList && gardenReqeust.fruitList.length > 0) {
        listplant = listplant.concat(
          extractPlantDetails(gardenReqeust.fruitList)
        );
      }

      return {
        id: gardenReqeust?._id,
        time: gardenReqeust?.time,
        farm: gardenReqeust?.farm,
        farm_name: gardenReqeust?.farm.name,
        gardenServiceTemplate: gardenReqeust?.gardenServiceTemplate,
        note: gardenReqeust.note,
        status: gardenReqeust.status,
        listplant: listplant,
      };
    });

    // Sort allGardenRequestClient by time descending (from newest to oldest)
    allGardenRequestClient.sort((a, b) => {
      if (a.time > b.time) return -1;
      if (a.time < b.time) return 1;
      return 0;
    });

    return { allGardenRequestClient };
  }, []);

  const {
    data: dataAllGardenRequest,
    isSuccess: isSuccessAllGardenRequest,
    isLoading: isLoadingAllGardenRequest,
    refetch: refetchAllGardenRequest,
  } = useQuery({
    queryKey: ["getAllGardenRequest"],
    queryFn: () => GARDEN_SERVICE_REQUEST.getAllGardenServiceRequestbyClient(),
    staleTime: 20 * 1000,
    select: (data) => parseDataGardenRequest(data.data.metadata),
  });

  return {
    allGardenRequest: dataAllGardenRequest?.allGardenRequestClient,
    isSuccessAllGardenRequest,
    isLoadingAllGardenRequest,
    refetchAllGardenRequest,
  };
}
