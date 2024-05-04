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
    enabled: !!clientId
  });

  return {
    allGarden: dataAllGarden?.allgarden,
    isSuccessAllGarden,
    isLoadingAllGarden,
  };
}
