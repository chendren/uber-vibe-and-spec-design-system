import * as React from 'react';

/**
 * Props for the brand button.
 * @startingPoint section="Forms" subtitle="Primary / accent / secondary / ghost, three sizes" viewport="700x150"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. @default 'primary' */
  variant?: 'primary' | 'accent' | 'secondary' | 'ghost';
  /** Size. @default 'md' */
  size?: 'sm' | 'md' | 'lg';
  /** Icon node rendered before the label (e.g. a Lucide <i> or <svg>). */
  iconLeft?: React.ReactNode;
  /** Icon node rendered after the label. */
  iconRight?: React.ReactNode;
  /** Stretch to fill container width. @default false */
  fullWidth?: boolean;
  /** Render as a different element, e.g. 'a' for links. @default 'button' */
  as?: 'button' | 'a';
}

/**
 * The brand button — clay primary, teal accent, plus secondary & ghost.
 */
export function Button(props: ButtonProps): JSX.Element;
