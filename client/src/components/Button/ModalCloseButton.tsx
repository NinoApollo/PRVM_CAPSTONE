import type { FC } from "react";

interface ModalCloseButtonProps {
  onClose: () => void;
}

const ModalCloseButton: FC<ModalCloseButtonProps> = ({ onClose }) => {
  return (
    <>
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 z-999 flex h-9.5 w-9.5 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 transition-colors hover:bg-emerald-100 hover:text-emerald-700 sm:h-11 sm:w-11 cursor-pointer"
      >
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18 17.94 6M18 18 6.06 6"
          />
        </svg>
      </button>
    </>
  );
};

export default ModalCloseButton;
