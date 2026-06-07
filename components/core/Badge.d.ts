import * as React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Color/intent. @default 'neutral' */
  variant?: 'clay' | 'teal' | 'neutral' | 'success' | 'warning' | 'danger' | 'solid';
  /** Show a leading status dot. @default false */
  dot?: boolean;
  /** Use the mono font (for spec-style tags like LIVE, BETA, MODULE 03). @default false */
  mono?: boolean;
}

/**
 * Small pill label for status, category, or module tags.
 */
export function Badge(props: BadgeProps): JSX.Element;
