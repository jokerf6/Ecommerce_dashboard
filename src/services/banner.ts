import { BannerType } from "@/static/interface";
import { BANNER } from "@/static/links";
import requestService from "@/static/request";

// Define the expected response type
interface BannerResponse {
  data: BannerType[];
}

export async function GetAllBanners(filter?: any): Promise<[] | BannerType[]> {
  try {
    const response = await requestService.get(
      BANNER,
      undefined,
      undefined,
      filter
        ? {
            // filter: { isActive: true },
            filter,
          }
        : undefined
    );

    const responseData = response.data as BannerResponse;

    return responseData.data;
  } catch (error) {
    console.error("Error fetching banners:", error);
    return [];
  }
}
