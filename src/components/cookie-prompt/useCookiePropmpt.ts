import { useCallback, useState } from "react";

interface UseCookiePromptReturnValue {
  isOpen: boolean;
  onClose: () => void;
  onAccept: () => void;
}

export function useCookiePrompt(
  storageKey: string,
): UseCookiePromptReturnValue {
  const [isOpen, setIsOpen] = useState(() => {
    const storedValue = localStorage.getItem(storageKey);

    if (storedValue) {
      return storedValue !== "false";
    }
    return true;
  });

  const onClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const onAccept = useCallback(() => {
    setIsOpen(false);
    localStorage.setItem(storageKey, false);
  }, [storageKey]);

  return {
    isOpen,
    onClose,
    onAccept,
  };
}
