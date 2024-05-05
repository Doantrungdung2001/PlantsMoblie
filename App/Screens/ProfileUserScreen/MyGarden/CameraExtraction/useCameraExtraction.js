import { useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import GARDEN from "../../../../Services/GardenService";

export default function useCameraExtraction({ gardenId }) {
  const parseDataAllCameraExtraction = useCallback((data) => {
    const allvideo = data.map((videos) => ({
      date: videos?.date,
      objectDetections: videos?.objectDetections,
    }));
    allvideo.sort((a, b) => {
      // Sử dụng toán tử so sánh để sắp xếp từ cũ đến mới
      return new Date(b.date) - new Date(a.date);
    });
    return { allvideo };
  }, []);

  const {
    data: dataCameraExtraction,
    isSuccess: isSuccessCameraExtraction,
    isLoading: isLoadingCameraExtraction,
  } = useQuery({
    queryKey: ["getCameraExtraction"],
    queryFn: () => GARDEN.getCameraExtraction(gardenId),
    staleTime: 20 * 1000,
    select: (data) => parseDataAllCameraExtraction(data?.data?.metadata),
    enabled: !!gardenId,
  });

  return {
    allVideos: dataCameraExtraction?.allvideo,
    isSuccessCameraExtraction,
    isLoadingCameraExtraction,
  };
}
