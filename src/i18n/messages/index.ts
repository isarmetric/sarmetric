import type { Locale } from '../locale';
import { en } from './en';
import { pl } from './pl';
import type { Messages } from './types';

export function getMessages(locale: Locale): Messages {
  return locale === 'pl' ? pl : en;
}

export type { Messages };
export { en, pl };
