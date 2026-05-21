import type { FC } from "react";

interface CloseButtonProps {
  label: string;
  onClose: () => void;
  newClassName?: string;
  className?: string;
}

const CloseButton: FC<CloseButtonProps> = ({
  label,
  onClose,
  newClassName,
  className,
}) => {
  return (
    <>
      <button
        type="button"
        className={`${newClassName ? newClassName : `px-4 py-3 bg-emerald-50 hover:bg-emerald-100 text-emerald-600 hover:text-emerald-700 text-sm font-medium cursor-pointer rounded-lg shadow-lg ${className}`}`}
        onClick={onClose}
      >
        {label}
      </button>
    </>
  );
};

export default CloseButton;
