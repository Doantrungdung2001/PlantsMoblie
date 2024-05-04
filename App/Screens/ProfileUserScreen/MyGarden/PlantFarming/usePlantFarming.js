import { useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import GARDEN from "../../../../Services/GardenService";

export default function usePlantFarming({ gardenId }) {
  const parseDataPlantFarming = useCallback((data) => {
    const farmingprocess = data.map((farming) => ({
      id: farming?._id,
      farm: farming?.farm,
      name: farming?.plant.plant_name,
      img: farming?.plant.plant_thumb,
      plant: farming?.plant,
      seed: farming?.seed,
      startDate: farming?.startDate,
      cameraId: farming?.cameraId,
      status: farming?.status,
      isGarden: farming?.isGarden,
      process: farming?.process,
      expect: farming?.expect,
      output: farming?.output,
      historyInfo: farming?.historyInfo,
      createdAtTime: farming?.createdAtTime,
      plantFarming: farming?.plantFarming,
    }));
    return { farmingprocess };
  }, []);

  const {
    data: dataPlantFarming,
    isSuccess: isSuccessPlantFarming,
    isLoading: isLoadingPlantFarming,
  } = useQuery({
    queryKey: ["getPlantFarming"],
    queryFn: () => GARDEN.getPlanFarmingByGarden(gardenId),
    staleTime: 20 * 1000,
    select: (data) => parseDataPlantFarming(data?.data?.metadata),
    enabled: !!gardenId,
  });

  return {
    farmingProcess: dataPlantFarming?.farmingprocess,
    isSuccessPlantFarming,
    isLoadingPlantFarming,
  };
}
