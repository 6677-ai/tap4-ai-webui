import queryString from 'query-string';

import { removeEmptyProperties } from './objectUtils';

export function objToQueryStr(path: string, obj: Record<string, any>): string {
  const qStr = queryString.stringify(removeEmptyProperties(obj));
  return `${path}${qStr && '?'}${qStr}`;
}

export function generateBearerToken(token: string) {
  return `Bearer ${token}`;
}

export function spaceToDash(text: string) {
  return text.replace(/\s/g, '-');
}

export function dashToSpace(text: string) {
  return text.replace(/-/g, ' ');
}
