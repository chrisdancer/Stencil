
export function format(first: string, middle: string, last: string): string {
  return (
    (first || '') +
    (middle ? ` ${middle}` : '') +
    (last ? ` ${last}` : '')
  );
}

export function formatSubheadline(article: string, name: string): string {
  return (
    (article || '') +
    (name ? ` ${name}` : '')
  );
}
