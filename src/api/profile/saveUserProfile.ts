import { ApiResponse } from "../../types/api.ts";
import { UserProfileDto } from "../../types/user-profile/UserProfileDto.ts";
import { USER_PROFILE_STORAGE_KEY } from "../consts.ts";

export async function saveUserProfile(
  data: Partial<UserProfileDto>,
): Promise<ApiResponse<null>> {
  try {
    sessionStorage.setItem(USER_PROFILE_STORAGE_KEY, JSON.stringify(data));

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
