import { useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import PLANT from "../../../Services/PlantService";
export default function useAllPlantsRecommend() {
  const parseDataAllPlants = useCallback((data) => {
    const allPlantsReccommned = data.map((plants) => ({
      id: plants._id,
      farm: plants.farm || "",
      plant_name: plants.plant_name || "",
      plant_thumb: plants.plant_thumb || "",
      plant_description: plants.plant_description || "",
      plant_type: plants.plant_type || "",
      isActive: plants?.isActive,
      timeCultivates: plants.timeCultivates || "",
      isDeleted: plants?.isDeleted,
      plant_slug: plants.plant_slug || "",
    }));
    
    return { allPlantsReccommned };
  }, []);

  const {
    data: dataAllPlantsRecommned,
    isSuccess: isSuccessAllPlantsRecommned,
    isLoading: isLoadingAllPlantsRecommned,
  } = useQuery({
    queryKey: ["getAllPlantsRecommned"],
    queryFn: () => PLANT.getAllPlantsRecommend(),
    staleTime: 20 * 1000,
    select: (data) => parseDataAllPlants(data.data.metadata),
  });

  return {
    dataAllPlantsRecommned: dataAllPlantsRecommned?.allPlantsReccommned,
    isSuccessAllPlantsRecommned,
    isLoadingAllPlantsRecommned,
  };
}
