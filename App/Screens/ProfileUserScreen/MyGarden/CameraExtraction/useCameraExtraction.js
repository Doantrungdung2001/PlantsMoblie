import { useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import { formatLocaleDateStringToNormal } from "../../../../Utils/helper";
import GARDEN from "../../../../Services/GardenService";

export default function useCameraExtraction({ gardenId }) {
  const parseDataAllCameraExtraction = useCallback((data) => {
    let allvideo = [];

    data.forEach((objectDetec) => {
      let date = objectDetec?.date || "";

      objectDetec.objectDetections.forEach((videos) => {
        var newData = {
          date: formatLocaleDateStringToNormal(date),
          id: videos?._id || "",
          camera_id: videos?.camera_id || "",
          start_time: videos.start_time || "",
          end_time: videos.end_time || "",
          video_url: videos.video_url.replace(/\.webm$/, ".mp4"),
        };
        allvideo.push(newData);
      });
    });
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
