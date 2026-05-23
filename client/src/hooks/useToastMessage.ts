import { useCallback, useState } from "react";

export const useToastMessage = (
  initialMessage: string,
  initialVisible: boolean,
) => {
  const [message, setMessage] = useState(initialMessage);
  const [isVisible, setIsVisible] = useState(initialVisible);

  const showToastMessage = useCallback((msg: string) => {
    setMessage(msg);
    setIsVisible(true);
  }, []);

  const closeToastMessage = useCallback(() => {
    setMessage("");
    setIsVisible(false);
  }, []);

  const toggleToastMessage = useCallback(() => {
    setIsVisible((prev) => !prev);
  }, []);

  return {
    message,
    isVisible,
    showToastMessage,
    closeToastMessage,
    toggleToastMessage,
  };
};
