import { ApiResponse } from "../../types/api.ts";
import { UserProfile } from "../../types/user-profile/UserProfile.ts";
import { mapUserProfileObjToDto } from "../../utils/user-profile/mapUserProfileObjToDto.ts";
import { USER_PROFILE_STORAGE_KEY } from "../consts.ts";

export async function saveUserProfile(
  data: UserProfile,
): Promise<ApiResponse<null>> {
  try {
    const dto = mapUserProfileObjToDto(data);
    sessionStorage.setItem(USER_PROFILE_STORAGE_KEY, JSON.stringify(dto));

    return {
      status: "success",
      data: null,
    };
  } catch (error) {
    return {
      status: "error",
      message: (error as Error).message,
    };
  }
}
