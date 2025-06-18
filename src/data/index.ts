/**
 * @file Aggregates and exports Bible verses from different translations.
 */

import { Verse, BibleVersion } from '../types';
import { kjvVerses } from './kjv';
import { nivVerses } from './niv';
import { rvr1960Verses } from './rvr1960';

/**
 * A record containing arrays of Bible verses, indexed by the Bible version abbreviation.
 * Each key corresponds to a `BibleVersion`, and its value is an array of `Verse` objects
 * from that specific translation.
 *
 * @example
 * import { verses } from './data';
 * const kjvVerses = verses.kjv;
 * const nivVerses = verses.niv;
 */
export const verses: Record<BibleVersion, Verse[]> = {
  kjv: kjvVerses,
  niv: nivVerses,
  rvr1960: rvr1960Verses,
};
