import { IconNames, IconProps } from "@/types";
import { icons } from "./icons";

const renderIcon = (name: IconNames) => {
  return icons[name];
};

const Icon = ({ name, variant = "primary", size = 20 }: IconProps) => {
  return (
    <div data-testid="icon" style={{ width: size, height: size }}>
      <svg
        fill={`var(--color-${variant})`}
        stroke={`var(--color-${variant})`}
        width={size}
        height={size}
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`0 0 ${size + 4} ${size + 4}`}
      >
        {renderIcon(name)}
      </svg>
    </div>
  );
};

export default Icon;
