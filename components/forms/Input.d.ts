import * as React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Field label rendered above the input. */
  label?: string;
  /** Helper text below the input. */
  hint?: string;
  /** Error message; when set, switches the field to its error style. */
  error?: string | null;
  /** Show a required asterisk on the label. @default false */
  required?: boolean;
  /** Leading icon node (e.g. a Lucide <i> or <svg>). */
  iconLeft?: React.ReactNode;
}

/**
 * Labeled text input with optional leading icon, hint, and error states.
 */
export function Input(props: InputProps): JSX.Element;
