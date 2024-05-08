import { useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import GARDEN from "../../Services/GardenService";
export default function useListGarden({ farmId }) {
  const parseDataGarden = useCallback((data) => {
    const allGardens = data.map((garden) => ({
      id: garden._id,
      farm: garden.farm || "",
      client: garden.client || "",
      projects: garden.projects || "",
      gardenServiceTemplate: garden.gardenServiceTemplate || "",
      gardenServiceRequest: garden.gardenServiceRequest || "",
      note: garden.note || "",
      startDate: garden.startDate || "",
      status: garden.status || "",
      clientRequests: garden.clientRequests || "",
      deliveries: garden.deliveries || "",
      cameraIds: garden.cameraIds || "",
    }));
    return { allGardens };
  }, []);

  const {
    data: dataAllGarden,
    isSuccess: isSuccessAllGarden,
    isLoading: isLoadingAllGarden
  } = useQuery({
    queryKey: ["getAllGarden"],
    queryFn: () => GARDEN.getAllGardensByFarmId(farmId),
    staleTime: 20 * 1000,
    select: (data) => parseDataGarden(data.data.metadata),
  });

  return {
    dataAllGarden: dataAllGarden?.allGardens,
    isSuccessAllGarden,
    isLoadingAllGarden,
  };
}
