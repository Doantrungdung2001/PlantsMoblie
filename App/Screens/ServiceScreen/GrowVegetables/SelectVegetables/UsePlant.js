import { useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import PLANT from "../../../../Services/PlantService";

export default function usePlant({ farmId }) {
  const currentMonth = new Date().getMonth() + 1; // Lấy tháng hiện tại từ 1 đến 12

  const parseDataAllPlant = useCallback(
    (data) => {
      let tabs = [
        {
          name: "Rau ăn lá",
          options: [],
        },
        {
          name: "Rau thơm",
          options: [],
        },
        {
          name: "Củ",
          options: [],
        },
        {
          name: "Quả",
          options: [],
        },
      ];

      data.forEach((item) => {
        let filteredTimeCultivatives = item.timeCultivatives.filter(
          (periods) => {
            for (const period of periods) {
              if (currentMonth >= period.start && currentMonth <= period.end) {
                return true;
              }
            }
            return false;
          }
        );

        if (filteredTimeCultivatives.length > 0) {
          switch (item.plant_type) {
            case "leafy":
              tabs[0].options.push({
                id: tabs[0].options.length + 1,
                plant_id: item._id,
                title: item.plant_name,
                image: item.plant_thumb,
                timeCultivatives: filteredTimeCultivatives,
                type: "leafyMax",
              });
              break;
            case "herb":
              tabs[1].options.push({
                id: tabs[1].options.length + 1,
                plant_id: item._id,
                title: item.plant_name,
                image: item.plant_thumb,
                timeCultivatives: filteredTimeCultivatives,
                type: "herbMax",
              });
              break;
            case "root":
              tabs[2].options.push({
                id: tabs[2].options.length + 1,
                plant_id: item._id,
                title: item.plant_name,
                image: item.plant_thumb,
                timeCultivatives: filteredTimeCultivatives,
                type: "rootMax",
              });
              break;
            case "fruit":
              tabs[3].options.push({
                id: tabs[3].options.length + 1,
                plant_id: item._id,
                title: item.plant_name,
                image: item.plant_thumb,
                timeCultivatives: filteredTimeCultivatives,
                type: "fruitMax",
              });
              break;
            default:
              break;
          }
        }
      });

      return { tabs };
    },
    [currentMonth]
  );

  const {
    data: dataAllPlant,
    isSuccess: isSuccessAllPlant,
    isLoading: isLoadingAllPlant,
  } = useQuery({
    queryKey: ["getDataAllPlant"],
    queryFn: () => PLANT.getPlantFromFarm(farmId),
    staleTime: 20 * 1000,
    select: (data) => parseDataAllPlant(data?.data?.metadata),
    enabled: !!farmId,
  });

  return {
    tabs: dataAllPlant?.tabs,
    isSuccessAllPlant,
    isLoadingAllPlant,
  };
}
