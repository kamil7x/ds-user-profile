import { parseISO } from "date-fns";

import { userProfileMock } from "../../tests/mocks/userProfile.mock.ts";
import { UserProfile } from "../../types/user-profile/UserProfile.ts";
import { UserProfileDto } from "../../types/user-profile/UserProfileDto.ts";
import { mapUserProfileDtoToObj } from "./mapUserProfileDtoToObj.ts";

describe("mapUserProfileDtoToObj", () => {
  const birthDateISO = "1990-01-01T01:00:00+01:00";
  const userProfileMockWithISODate: UserProfileDto = {
    ...userProfileMock,
    birthDate: birthDateISO,
  };

  it("should correctly map DTO to object", () => {
    const result = mapUserProfileDtoToObj(userProfileMockWithISODate);
    const expected: UserProfile = {
      ...userProfileMock,
      birthDate: parseISO(userProfileMockWithISODate.birthDate),
    };

    expect(result).toEqual(expected);
  });

  it("should correctly parse birthDate", () => {
    const result = mapUserProfileDtoToObj(userProfileMockWithISODate);
    expect(result.birthDate).toBeInstanceOf(Date);
    expect(result.birthDate).toEqual(
      parseISO(userProfileMockWithISODate.birthDate),
    );
  });

  it("should preserve all other fields unchanged", () => {
    const result = mapUserProfileDtoToObj(userProfileMockWithISODate);
    expect(result.firstName).toBe(userProfileMockWithISODate.firstName);
    expect(result.lastName).toBe(userProfileMockWithISODate.lastName);
    expect(result.email).toBe(userProfileMockWithISODate.email);
    expect(result.phoneNumber).toBe(userProfileMockWithISODate.phoneNumber);
    expect(result.about).toBe(userProfileMockWithISODate.about);
    expect(result.avatarUrl).toBe(userProfileMockWithISODate.avatarUrl);
  });
});
