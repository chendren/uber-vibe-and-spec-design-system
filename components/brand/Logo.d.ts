import * as React from 'react';

/**
 * Props for the Uber Vibe and Spec logo.
 * @startingPoint section="Brand" subtitle="Wave-on-baseline mark + wordmark, themed" viewport="700x190"
 */
export interface LogoProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Which form of the logo to render. @default 'lockup' */
  variant?: 'mark' | 'wordmark' | 'lockup';
  /** Mark height in px (wordmark scales relative to this). @default 32 */
  size?: number;
  /** Wordmark text color for light vs dark surfaces. @default 'light' */
  theme?: 'light' | 'dark';
  className?: string;
  style?: React.CSSProperties;
}

/**
 * The Uber Vibe and Spec logo: a wave (vibe) resting on a baseline (spec).
 */
export function Logo(props: LogoProps): JSX.Element;
