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

const Icon = ({
  name,
  size = "sm",
  hasInverseColors = false,
  fill = null,
}: IconProps) => {
  const sizeInPx = useMemo(() => getSizeInPx(size), [size]);
  const iconElement = useMemo(() => icons[name], [name]);
  // TODO Check cases were fill and stroke should be different
  const iconColor = useMemo(() => {
    if (fill) {
      return `var(--color-${fill})`;
    }
    return hasInverseColors
      ? "var(--color-background)"
      : "var(--color-foreground)";
  }, [fill, hasInverseColors]);
  const viewBox = useMemo(() => "0 0 24 24", []);
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
        fill={iconColor}
        stroke={iconColor}
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
