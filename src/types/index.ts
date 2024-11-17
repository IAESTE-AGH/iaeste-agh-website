import type { Theme } from './theme';

export type { Theme };

export interface FontSettings {
    fontFamily: string;
    fontSize: FontSize;
    lineHeight: LineHeight;
    textDecoration?: 'none' | 'underline';
}

export type FontSize = number | `${number}px` | `${number}rem` | `${number}em`;

export type LineHeight =
    | number
    | `${number}px`
    | `${number}rem`
    | `${number}em`
    | 'normal';

export type SpacingValue = number | `${number}px`;
export type RadiusValue = number | `${number}px`;
export type Border = `${number}px solid ${Color}` | 'none';

type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

export type Color = RGB | RGBA | HEX;

export type LinearGradient =
    | `linear-gradient(${number}deg, ${Color}, ${Color})`
    | `linear-gradient(${number}deg, ${Color}, ${Color}, ${Color})`;

export type BoxShadow =
    | `${number}px ${number}px ${number}px ${number}px ${Color}`
    | BoxShadow[];

export type TextVariant =
    | 'display'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'label'
    | 'body'
    | 'link';
