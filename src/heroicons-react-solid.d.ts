declare module "@heroicons/react/solid" {
  import * as React from "react";

  export interface IconProps extends React.HTMLProps<SVGSVGElement> {
    size?: number | string;
  }

  export const XIcon: React.FC<IconProps>;
  export const TrashIcon: React.FC<IconProps>;
  export const PencilIcon: React.FC<IconProps>;
  export const UserCircleIcon: React.FC<IconProps>;

  // Add other icons here if needed
}
