import { useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import GARDEN from "../../../../Services/GardenService";

export default function useListCamera({ gardenId }) {
  // Hàm để lấy ID của video từ đường link YouTube
  const getYouTubeVideoId = (url) => {
    const regExp =
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    const match = url.match(regExp);
    return match && match[7].length === 11 ? match[7] : null;
  };

  // Hàm xử lý dữ liệu từ server
  const parseDataAllCamera = useCallback((data) => {
    const allcamera = data.map((camera) => {
      const videoId = getYouTubeVideoId(camera?.rtsp_link); // Lấy livestreamID từ RTSP link

      return {
        id: camera?._id,
        name: camera?.name,
        rtsp_link: camera?.rtsp_link,
        farm: camera?.farm,
        livestreamId: videoId, // Thêm livestreamID vào đối tượng camera
      };
    });
    console.log("du lue", allcamera);

    return { allcamera };
  }, []);

  // Sử dụng react-query để fetch dữ liệu từ server
  const {
    data: dataAllCamera,
    isSuccess: isSuccessAllCamera,
    isLoading: isLoadingAllCamera,
    refetch: refetchAllCamera,
  } = useQuery({
    queryKey: ["getAllCamera"],
    queryFn: () => GARDEN.getLiveCamera(gardenId), // Gọi API để lấy dữ liệu camera
    staleTime: 20 * 1000,
    select: (data) => parseDataAllCamera(data?.data?.metadata), // Xử lý dữ liệu trước khi trả về
    enabled: !!gardenId, // Bật/tắt fetch dữ liệu dựa trên gardenId
  });

  return {
    dataAllCamera: dataAllCamera?.allcamera,
    isSuccessAllCamera,
    isLoadingAllCamera,
    refetchAllCamera,
  };
}
