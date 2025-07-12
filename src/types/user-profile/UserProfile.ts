import { UserProfileDto } from "./UserProfileDto.ts";

export interface UserProfile extends Omit<UserProfileDto, "birthDate"> {
  birthDate: Date;
}
