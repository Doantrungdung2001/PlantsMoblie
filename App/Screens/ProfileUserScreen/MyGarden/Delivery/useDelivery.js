import { useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import GARDEN from "../../../../Services/GardenService";

export default function useListDelivery({ gardenId }) {
  const parseDataAllDelivery = useCallback((data) => {
    const alldelivery = data.map((delivery) => ({
      time: delivery?.time,
      deliveryDetails: delivery?.deliveryDetails,
      note: delivery?.note,
      status: delivery?.status,
      clientAccept: delivery?.clientAccept,
      id: delivery?._id,
    }));
    alldelivery.sort((a, b) => {
      // Sử dụng toán tử so sánh để sắp xếp từ cũ đến mới
      return new Date(b.time) - new Date(a.time);
    });
    return { alldelivery };
  }, []);

  const {
    data: dataAllDelivery,
    isSuccess: isSuccessAllDelivery,
    isLoading: isLoadingAllDelivery,
  } = useQuery({
    queryKey: ["getAllDeliveryByGarden"],
    queryFn: () => GARDEN.getAllDeliveryByGarden(gardenId),
    staleTime: 20 * 1000,
    select: (data) => parseDataAllDelivery(data?.data?.metadata),
    enabled: !!gardenId,
  });

  return {
    allDelivery: dataAllDelivery?.alldelivery,
    isSuccessAllDelivery,
    isLoadingAllDelivery,
  };
}
