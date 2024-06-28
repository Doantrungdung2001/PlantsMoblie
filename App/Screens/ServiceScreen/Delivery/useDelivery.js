import { useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import GARDEN from "../../../Services/GardenService";

export default function useListDelivery({ clientId }) {
  const parseDataAllDelivery = useCallback((data) => {
    let allDelivery = [];

    data.forEach((delivery) => {
      if (delivery?.deliveries?.length > 0) {
        delivery.deliveries.forEach((item) => {
          const infoDelivery = {
            gardenId: delivery._id,
            deliveryId: item._id,
            time: item.time,
            infoDetail: item.deliveryDetails,
            status: item.status,
            farm: delivery.farm,
            client: delivery.client,
            note: delivery.note,
          };

          allDelivery.push(infoDelivery);
        });
      }
    });

    // Sort by time, from newest to oldest
    allDelivery.sort((a, b) => new Date(b.time) - new Date(a.time));

    return { allDelivery };
  }, []);

  const {
    data: dataAllDelivery,
    isSuccess: isSuccessAllDelivery,
    isLoading: isLoadingAllDelivery,
    refetch: refetchDelivery,
  } = useQuery({
    queryKey: ["getAllDeliveryByClient"],
    queryFn: () => GARDEN.getAllDeliveryByClient(clientId),
    staleTime: 20 * 1000,
    select: (data) => parseDataAllDelivery(data?.data?.metadata),
    enabled: !!clientId,
  });

  return {
    allDelivery: dataAllDelivery?.allDelivery,
    isSuccessAllDelivery,
    isLoadingAllDelivery,
    refetchDelivery,
  };
}
