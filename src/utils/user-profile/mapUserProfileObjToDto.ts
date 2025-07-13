import { formatISO } from "date-fns";

import { UserProfile } from "../../types/user-profile/UserProfile.ts";
import { UserProfileDto } from "../../types/user-profile/UserProfileDto.ts";

export function mapUserProfileObjToDto({
  birthDate,
  ...data
}: UserProfile): UserProfileDto {
  return {
    ...data,
    birthDate: formatISO(birthDate),
  };
}
