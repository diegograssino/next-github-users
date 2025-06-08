import { IconNames, IconProps, Sizes } from "@/types";
import { icons } from "./icons";

const renderIcon = (name: IconNames) => {
  return icons[name];
};

const getSizeInPx = (size: Sizes) => {
  let sizeInPx;

  switch (size) {
    case "md":
      sizeInPx = 24;
      break;
    case "lg":
      sizeInPx = 32;
      break;
    case "xl":
      sizeInPx = 48;
      break;
    default:
      sizeInPx = 20;
  }

  return sizeInPx;
};

const Icon = ({ name, variant = "primary", size = "sm" }: IconProps) => {
  const sizeInPx = getSizeInPx(size);

  return (
    <div data-testid="icon" style={{ width: sizeInPx, height: sizeInPx }}>
      <svg
        fill={`var(--color-${variant})`}
        stroke={`var(--color-${variant})`}
        width={sizeInPx}
        height={sizeInPx}
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`0 0 ${sizeInPx + 4} ${sizeInPx + 4}`}
      >
        {renderIcon(name)}
      </svg>
    </div>
  );
};

export default Icon;
