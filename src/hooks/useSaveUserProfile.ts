import { useMutation } from "@tanstack/react-query";

import { saveUserProfile } from "../api/profile/saveUserProfile.ts";

export interface UseSaveUserProfileProps {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}

export function useSaveUserProfile({
  onSuccess,
  onError,
}: UseSaveUserProfileProps = {}) {
  const { mutate } = useMutation({
    mutationFn: saveUserProfile,
    onSuccess,
    onError,
  });

  return {
    mutate,
  };
}
