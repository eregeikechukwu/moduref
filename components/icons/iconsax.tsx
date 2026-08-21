import {
  Home,
  Profile,
  UserSquare,
  Layer,
  MessageText,
  MessageText1,
  ArrowRight,
  ArrowRight2,
  SmsTracking,
  Location,
} from "iconsax-reactjs";

export const iconMap = {
  Home: Home,
  Profile: Profile,
  userSquare: UserSquare,
  layer: Layer,
  messageText: MessageText,
  messageText1: MessageText1,
  arrowRight: ArrowRight,
  arrowRight2: ArrowRight2,
  smsTracking: SmsTracking,
  location: Location,
};

type IconVariant =
  | "Linear"
  | "Outline"
  | "TwoTone"
  | "Bulk"
  | "Broken"
  | "Bold";

interface IconProps {
  name: keyof typeof iconMap;
  size?: number | string;
  color?: string;
  variant?: IconVariant;
  className?: string;
}
export function Icon({
  name,
  size = 24,
  color = "currentColor",
  variant = "Linear",
  className,
}: IconProps) {
  const IconComponent = iconMap[name];

  if (!IconComponent) {
    console.error(`Icon "${name}" not found.`);
    return null;
  }

  return (
    <IconComponent
      size={size}
      color={color}
      variant={variant}
      className={className}
    />
  );
}
