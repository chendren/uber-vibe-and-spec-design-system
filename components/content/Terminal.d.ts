import * as React from 'react';

/**
 * Props for the Claude Code terminal block.
 * @startingPoint section="Content" subtitle="Faux Claude Code session, themed dark" viewport="700x300"
 */
export interface TerminalProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Window title in the chrome bar. */
  title?: string;
  /** Prompt string shown before command lines. @default '~ ❯' */
  prompt?: string;
  /** The session lines, top to bottom. */
  lines?: TerminalLine[];
  /** Show the macOS-style window chrome bar. @default true */
  showChrome?: boolean;
  /** Show a blinking cursor at the end. @default false */
  cursor?: boolean;
}

export interface TerminalLine {
  /** Line style. @default 'output' */
  kind?: 'cmd' | 'command' | 'comment' | 'output' | 'success' | 'claude';
  /** The text content of the line. */
  text: string;
}

/**
 * A stylized Claude Code terminal session — the brand's signature content block.
 */
export function Terminal(props: TerminalProps): JSX.Element;
