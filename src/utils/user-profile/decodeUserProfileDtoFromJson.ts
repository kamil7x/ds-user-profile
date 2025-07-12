import { UserProfileDto } from "../../types/user-profile/UserProfileDto.ts";

export function decodeUserProfileDtoFromJson(data: string): UserProfileDto {
  const parsedData = JSON.parse(data);

  return {
    firstName: parsedData.firstName ?? "",
    lastName: parsedData.lastName ?? "",
    birthDate: parsedData.birthDate ?? "",
    email: parsedData.email ?? "",
    phoneNumber: parsedData.phoneNumber ?? "",
    about: parsedData.about ?? "",
    avatarUrl: parsedData.avatarUrl ?? "",
  };
}
