import * as React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Elevation/surface style. @default 'default' */
  variant?: 'default' | 'flat' | 'raised' | 'sunken';
  /** Lift + deepen shadow on hover (for clickable cards). @default false */
  interactive?: boolean;
  /** Optional mono uppercase kicker above the title. */
  eyebrow?: React.ReactNode;
  /** Optional serif title. */
  title?: React.ReactNode;
}

/**
 * Surface container for content — feature cards, module cards, pricing tiers.
 */
export function Card(props: CardProps): JSX.Element;
