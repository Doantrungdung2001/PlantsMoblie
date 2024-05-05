import { useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import GARDEN from "../../../../Services/GardenService";
export default function useListProcess({ gardenId }) {
  const parseDataCultivation = useCallback((data) => {
    const allprocss = data.map((process) => ({
      id: process?._id,
      plant: process?.plant,
      seed: process?.seed,
      status: process?.status,
      process: process?.process,
      startDate: process?.startDate,
    }));
    allprocss.sort((a, b) => {
      // Sử dụng toán tử so sánh để sắp xếp từ cũ đến mới
      return new Date(b.startDate) - new Date(a.startDate);
    });
    return { allprocss };
  }, []);

  const {
    data: dataAllProcess,
    isSuccess: isSuccessAllProcess,
    isLoading: isLoadingAllProcess,
  } = useQuery({
    queryKey: ["getAllProcess"],
    queryFn: () => GARDEN.getAllProcessByGarden(gardenId),
    staleTime: 20 * 1000,
    select: (data) => parseDataCultivation(data?.data?.metadata),
    enabled: !!gardenId,
  });

  return {
    allProcess: dataAllProcess?.allprocss,
    isSuccessAllProcess,
    isLoadingAllProcess,
  };
}
