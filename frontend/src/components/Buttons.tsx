export const PrimaryButton = ({
  type = "submit",
  className,
  value,
  onClick,
}: {
  type?: "submit" | "reset" | "button" | undefined;
  className?: string;
  value?: string;
  onClick?: () => void;
}) => {
  return (
    <button
      className={`bg-orange-600 text-white rounded-lg py-2 ${className} px-3`}
      type={type}
      onClick={onClick}
    >
      {value}
    </button>
  );
};
