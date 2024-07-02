import { useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import PLANT from "../../../../Services/PlantService";
export default function useListPlantFarm({ farmId }) {
  const parseDataAllPlantFarm = useCallback((data) => {
    const allplants = data.map((plants) => ({
      _id: plants?._id,
      farm: plants?.farm,
      plant_name: plants?.plant_name,
      plant_thumb: plants?.plant_thumb,
      plant_description: plants?.plant_description,
      plant_slug: plants?.plant_slug,
      plant_type: plants?.plant_type,
      timeCultivates: plants?.timeCultivates,
    }));
    return { allplants };
  }, []);

  const {
    data: dataAllPlantFarm,
    isSuccess: isSuccessAllPlantFarm,
    isLoading: isLoadingAllPlantFarm,
    refetch: refetcListPlantFarm,
  } = useQuery({
    queryKey: ["getAllPlantFarm"],
    queryFn: () => PLANT.getPlantFromFarm(farmId),
    staleTime: 20 * 1000,
    select: (data) => parseDataAllPlantFarm(data.data.metadata),
    enabled: !!farmId,
  });

  return {
    dataAllPlantFarm: dataAllPlantFarm?.allplants,
    isSuccessAllPlantFarm,
    isLoadingAllPlantFarm,
    refetcListPlantFarm,
  };
}
