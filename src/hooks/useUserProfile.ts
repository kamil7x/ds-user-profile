import { useQuery } from "@tanstack/react-query";

import { USER_PROFILE_QUERY_KEY } from "../api/consts.ts";
import { fetchUserProfile } from "../api/profile/fetchUserProfile.ts";
import { UseApiReturnValue } from "../types/api.ts";
import { UserProfile } from "../types/user-profile/UserProfile.ts";
import { mapUserProfileDtoToObj } from "../utils/user-profile/mapUserProfileDtoToObj.ts";

export function useUserProfile(): UseApiReturnValue<UserProfile> {
  const { data, isLoading, error } = useQuery({
    queryKey: [USER_PROFILE_QUERY_KEY],
    queryFn: fetchUserProfile,
  });

  if (data?.status === "success") {
    return {
      isLoading,
      data: mapUserProfileDtoToObj(data.data),
    };
  }

  return {
    isLoading,
    error,
  };
}
