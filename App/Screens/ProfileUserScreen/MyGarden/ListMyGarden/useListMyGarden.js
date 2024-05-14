import { useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import GARDEN from "../../../../Services/GardenService";
export default function useListGarden({ clientId }) {
  const parseDataAllGarden = useCallback((data) => {
    const allgarden = data.map((garden) => ({
      id: garden?._id,
      farm: garden?.farm,
      client: garden?.client,
      projects: garden?.projects,
      gardenServiceTemplate: garden?.gardenServiceTemplate,
      gardenServiceRequest: garden?.gardenServiceRequest,
      listPlants: garden?.gardenServiceRequest
        ? [
            ...garden.gardenServiceRequest.herbList.map((plant) => ({
              id: plant._id,
              plants_name: plant.plant_name,
              plants_thumb: plant.plant_thumb,
            })),
            ...garden.gardenServiceRequest.leafyList.map((plant) => ({
              id: plant._id,
              plants_name: plant.plant_name,
              plants_thumb: plant.plant_thumb,
            })),
            ...garden.gardenServiceRequest.rootList.map((plant) => ({
              id: plant._id,
              plants_name: plant.plant_name,
              plants_thumb: plant.plant_thumb,
            })),
            ...garden.gardenServiceRequest.fruitList.map((plant) => ({
              id: plant._id,
              plants_name: plant.plant_name,
              plants_thumb: plant.plant_thumb,
            })),
          ]
        : [],
      note: garden?.note,
      startDate: garden?.startDate,
      status: garden?.status,
      status: garden?.status,
      clientRequests: garden?.clientRequests,
      deliveries: garden?.deliveries,
      createdAt: garden?.createdAt,
    }));

    return { allgarden };
  }, []);

  const {
    data: dataAllGarden,
    isSuccess: isSuccessAllGarden,
    isLoading: isLoadingAllGarden,
  } = useQuery({
    queryKey: ["getAllGarden"],
    queryFn: () => GARDEN.getAllGardenByClient(clientId),
    staleTime: 20 * 1000,
    select: (data) => parseDataAllGarden(data?.data?.metadata),
    enabled: !!clientId,
  });

  return {
    allGarden: dataAllGarden?.allgarden,
    isSuccessAllGarden,
    isLoadingAllGarden,
  };
}
