export function classNames(
  ...classes: (string | boolean | null | undefinde)[]
): string {
  return classes.filter(Boolean).join(" ");
}
