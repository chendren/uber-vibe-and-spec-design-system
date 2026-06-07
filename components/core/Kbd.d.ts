import * as React from 'react';

export interface KbdProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Array of keycaps to render, joined with "+". E.g. ['⌘','K']. */
  keys?: React.ReactNode[];
}

/**
 * Keyboard shortcut display with physical keycap styling — ideal for a
 * developer-focused brand teaching tools and commands.
 */
export function Kbd(props: KbdProps): JSX.Element;
