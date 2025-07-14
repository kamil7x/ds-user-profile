import { parseISO } from "date-fns";

import { userProfileMock } from "../../tests/mocks/userProfile.mock.ts";
import { UserProfile } from "../../types/user-profile/UserProfile.ts";
import { mapUserProfileObjToDto } from "./mapUserProfileObjToDto.ts";

describe("mapUserProfileObjToDto", () => {
  const birthDateISO = "1990-01-01T01:00:00+01:00";
  const userProfileMockWithISO = {
    ...userProfileMock,
    birthDate: birthDateISO,
  };
  const userProfileObj: UserProfile = {
    ...userProfileMockWithISO,
    birthDate: parseISO(userProfileMockWithISO.birthDate),
  };

  it("should correctly map object to DTO", () => {
    const result = mapUserProfileObjToDto(userProfileObj);
    expect(result).toEqual(userProfileMockWithISO);
  });

  it("should correctly format birthDate to string", () => {
    const result = mapUserProfileObjToDto(userProfileObj);
    expect(result.birthDate).toBe(userProfileMockWithISO.birthDate);
  });

  it("should preserve all other fields unchanged", () => {
    const result = mapUserProfileObjToDto(userProfileObj);
    expect(result.firstName).toBe(userProfileObj.firstName);
    expect(result.lastName).toBe(userProfileObj.lastName);
    expect(result.email).toBe(userProfileObj.email);
    expect(result.phoneNumber).toBe(userProfileObj.phoneNumber);
    expect(result.about).toBe(userProfileObj.about);
    expect(result.avatarUrl).toBe(userProfileObj.avatarUrl);
  });
});
