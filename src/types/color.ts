type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

export type Color = RGB | RGBA | HEX;

// modify to include the possibility of using two or more colors
export type LinearGradient =
  | `linear-gradient(${number}deg, ${Color}, ${Color})`
  | `linear-gradient(${number}deg, ${Color}, ${Color}, ${Color})`;

export type BoxShadow =
  `${number}px ${number}px ${number}px ${number}px ${Color}`;
