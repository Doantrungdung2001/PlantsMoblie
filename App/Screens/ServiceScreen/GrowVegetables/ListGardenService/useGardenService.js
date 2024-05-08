import { useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import GARDEN_SERVICE_TEMPLATE from "../../../../Services/GardenServiceTemplate";
export default function useListGardenService({ farmId }) {
  const parseDataGardenService = useCallback((data) => {
    const allGardenSerive = data.map((gardenService) => ({
      id: gardenService._id,
      farm: gardenService.farm || "Chưa cập nhật",
      square: gardenService.square || "Chưa cập nhật",
      status: gardenService.status || "Chưa cập nhật",
      quantity: gardenService.quantity || "",
      avatarGarden: gardenService.avatarGarden || "",
      expectDeliveryPerWeek:
        gardenService.expectDeliveryPerWeek || "Chưa cập nhật",
      expectDeliveryAmount:
        gardenService.expectDeliveryAmount || "Chưa cập nhật",
      expectedOutput: gardenService.expectedOutput || "Chưa cập nhật",
      price: gardenService.price || "Chưa cập nhật",
      leafyMax: gardenService.leafyMax || "Chưa cập nhật",
      herbMax: gardenService.herbMax || "Chưa cập nhật",
      rootMax: gardenService.rootMax || "Chưa cập nhật",
      fruitMax: gardenService.fruitMax || "Chưa cập nhật",
      isDeleted: gardenService.isDeleted || "Chưa cập nhật",
    }));
    return { allGardenSerive };
  }, []);

  const {
    data: dataAllGardenService,
    isSuccess: isSuccessAllGardenService,
    isLoading: isLoadingAllGardenService,
  } = useQuery({
    queryKey: ["getAllGardenService"],
    queryFn: () => GARDEN_SERVICE_TEMPLATE.getServiceTemplate(farmId),
    staleTime: 20 * 1000,
    select: (data) => parseDataGardenService(data.data.metadata),
  });

  return {
    allGardenSerive: dataAllGardenService?.allGardenSerive,
    isSuccessAllGardenService,
    isLoadingAllGardenService,
  };
}
