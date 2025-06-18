/**
 * @file Defines the core types used throughout the library.
 */

/**
 * Represents a single Bible verse.
 */
export interface Verse {
  /** The name of the book of the Bible (e.g., "Genesis", "John"). */
  book: string;
  /** The chapter number of the verse. */
  chapter: number;
  /** The verse number. */
  verse: number;
  /** The text content of the verse. */
  text: string;
  /** The full reference string for the verse (e.g., "John 3:16"). */
  reference: string;
}

/**
 * Defines the supported Bible version abbreviations.
 * 'kjv': King James Version
 * 'niv': New International Version
 * 'rvr1960': Reina-Valera 1960
 */
export type BibleVersion = 'kjv' | 'niv' | 'rvr1960';
