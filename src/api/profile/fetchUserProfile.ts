import type { ApiResponse } from "../../types/api.ts";
import { UserProfileDto } from "../../types/user-profile/UserProfileDto.ts";
import { decodeUserProfileDtoFromJson } from "../../utils/user-profile/decodeUserProfileDtoFromJson.ts";
import { USER_PROFILE_STORAGE_KEY } from "../consts.ts";

export function fetchUserProfile(): ApiResponse<UserProfileDto> {
  try {
    const data = sessionStorage.getItem(USER_PROFILE_STORAGE_KEY);

    if (!data) {
      return {
        status: "error",
      };
    }

    return {
      status: "success",
      data: decodeUserProfileDtoFromJson(data),
    };
  } catch (error) {
    return {
      status: "error",
      message: (error as Error).message,
    };
  }
}
