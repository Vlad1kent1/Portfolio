declare module 'culori' {
  export interface Color {
    mode: string;
    alpha?: number;
  }
  export interface Oklch extends Color {
    mode: 'oklch';
    l: number;
    c: number;
    h?: number;
  }

  export function oklch(color: string | Color | object): Oklch;
  export function parse(color: string): Color | null;
}
