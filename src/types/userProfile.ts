import { parseISO } from "date-fns";

export interface UserProfileDto {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  birthDate: string;
  about: string;
  avatarUrl: string;
}

export interface UserProfile extends Omit<UserProfileDto, "birthDate"> {
  birthDate: Date;
}

export function mapUserProfileDtoToObj({
  birthDate,
  ...data
}: UserProfileDto): UserProfile {
  return {
    ...data,
    birthDate: parseISO(birthDate),
  };
}

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
