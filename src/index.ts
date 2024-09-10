type Arg = false | 0 | null | undefined | string;

export function clns(...args: Arg[]): string {
  return args.filter(Boolean).join(' ');
}

export default clns;
