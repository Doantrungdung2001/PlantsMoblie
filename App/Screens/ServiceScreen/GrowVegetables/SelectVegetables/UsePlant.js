import { useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import PLANT from "../../../../Services/PlantService";

export default function usePlant({ farmId }) {
  const parseDataAllPlant = useCallback((data) => {
    const allplant = data.map((plant) => ({
      id: plant?._id,
      name: plant?.plant_name,
      img: plant?.plant_thumb,
      plant_type: plant?.plant_type,
      plant_description: plant?.plant_description,
      plant_slug: plant?.plant_slug,
    }));

    return { allplant };
  }, []);

  const {
    data: dataAllPlant,
    isSuccess: isSuccessAllPlant,
    isLoading: isLoadingAllPlant,
  } = useQuery({
    queryKey: ["getDataAllPlant"],
    queryFn: () => PLANT.getPlantFromFarm(farmId),
    staleTime: 20 * 1000,
    select: (data) => parseDataAllPlant(data?.data?.metadata),
    enabled: !!gardenId,
  });

  return {
    allPlants: dataAllPlant?.allplant,
    isSuccessAllPlant,
    isLoadingAllPlant,
  };
}
