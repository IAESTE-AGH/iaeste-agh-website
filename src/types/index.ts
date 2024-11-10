import type { Theme } from './theme';

export type { Theme };

export interface FontSettings {
  fontFamily: string;
  fontSize: string;
  fontWeight: number;
  lineHeight: number;
}

export type SpacingValue = number | `${number}px`;
export type RadiusValue = number | `${number}px`;
export type Border = `${number}px solid ${Color}`;

type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

export type Color = RGB | RGBA | HEX;

export type LinearGradient =
  | `linear-gradient(${number}deg, ${Color}, ${Color})`
  | `linear-gradient(${number}deg, ${Color}, ${Color}, ${Color})`;

export type BoxShadow =
  `${number}px ${number}px ${number}px ${number}px ${Color}`;
