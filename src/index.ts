type Arg = false | 0 | null | undefined | string | Record<string, unknown>;

export function clns(...args: Arg[]): string {
  const classNames: string[] = [];

  for (const arg of args) {
    if (!arg) continue;

    if (typeof arg === 'string') {
      classNames.push(arg);
      continue;
    }

    for (const [className, condition] of Object.entries(arg)) {
      if (condition) classNames.push(className);
    }
  }

  return classNames.join(' ');
}

export default clns;
