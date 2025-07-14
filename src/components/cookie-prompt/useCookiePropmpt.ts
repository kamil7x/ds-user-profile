import { useCallback, useState } from "react";

interface UseCookiePromptReturnValue {
  isOpen: boolean;
  onClose: () => void;
  onAccept: () => void;
}

const STORAGE_VALUE = "disabled";

export function useCookiePrompt(
  storageKey: string,
): UseCookiePromptReturnValue {
  const [isOpen, setIsOpen] = useState(() => {
    const storedValue = localStorage.getItem(storageKey);

    if (storedValue) {
      return storedValue !== STORAGE_VALUE;
    }
    return true;
  });

  const onClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const onAccept = useCallback(() => {
    setIsOpen(false);
    localStorage.setItem(storageKey, STORAGE_VALUE);
  }, [storageKey]);

  return {
    isOpen,
    onClose,
    onAccept,
  };
}
