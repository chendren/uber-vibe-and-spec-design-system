import * as React from 'react';

export interface CalloutProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Intent / color. @default 'info' */
  variant?: 'info' | 'tip' | 'success' | 'warning' | 'danger';
  /** Leading icon node (e.g. a Lucide <i> or <svg>). */
  icon?: React.ReactNode;
  /** Optional bold title line above the body. */
  title?: React.ReactNode;
}

/**
 * Inline note / aside for tips, warnings, and asides in lessons & docs.
 */
export function Callout(props: CalloutProps): JSX.Element;
