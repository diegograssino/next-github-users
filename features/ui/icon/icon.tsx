import { IconProps, Sizes } from "@/types";
import { useMemo } from "react";
import { icons } from "./icons";

const getSizeInPx = (size: Sizes): number => {
  switch (size) {
    case "md":
      return 24;
    case "lg":
      return 32;
    case "xl":
      return 48;
    default:
      return 20;
  }
};

const Icon = ({ name, variant = "primary", size = "sm" }: IconProps) => {
  const sizeInPx = useMemo(() => getSizeInPx(size), [size]);
  const iconElement = useMemo(() => icons[name], [name]);
  const fillColor = useMemo(() => `var(--color-${variant})`, [variant]);
  const strokeColor = useMemo(() => `var(--color-${variant})`, [variant]);
  const viewBox = useMemo(
    () => `0 0 ${sizeInPx + 4} ${sizeInPx + 4}`,
    [sizeInPx]
  );
  const containerStyle = useMemo(
    () => ({
      width: sizeInPx,
      height: sizeInPx,
    }),
    [sizeInPx]
  );

  return (
    <div data-testid="icon" style={containerStyle}>
      <svg
        fill={fillColor}
        stroke={strokeColor}
        width={sizeInPx}
        height={sizeInPx}
        xmlns="http://www.w3.org/2000/svg"
        viewBox={viewBox}
      >
        {iconElement}
      </svg>
    </div>
  );
};

export default Icon;
