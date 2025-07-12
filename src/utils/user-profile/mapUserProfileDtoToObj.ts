import { parseISO } from "date-fns";

import { UserProfile } from "../../types/user-profile/UserProfile.ts";
import { UserProfileDto } from "../../types/user-profile/UserProfileDto.ts";

export function mapUserProfileDtoToObj({
  birthDate,
  ...data
}: UserProfileDto): UserProfile {
  return {
    ...data,
    birthDate: parseISO(birthDate),
  };
}
