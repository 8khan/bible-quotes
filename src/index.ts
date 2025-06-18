import { Verse, BibleVersion } from './types';
import { verses } from './data';

/**
 * Gets a random Bible verse from a specific version.
 * @param {BibleVersion} version The Bible version to use.
 * @returns {Verse} A Verse object.
 */
function getRandomVerse(version: BibleVersion): Verse {
  const versionVerses = verses[version];
  const randomIndex = Math.floor(Math.random() * versionVerses.length);
  return versionVerses[randomIndex];
}

/**
 * Finds a specific verse by its reference in a specific version.
 * @param {string} reference The verse reference (e.g., "John 3:16").
 * @param {BibleVersion} version The Bible version to use.
 * @returns {Verse | undefined} A Verse object or undefined if not found.
 */
function findVerse(
  reference: string,
  version: BibleVersion
): Verse | undefined {
  const versionVerses = verses[version];
  // Simple case-insensitive search
  return versionVerses.find(
    (v) => v.reference.toLowerCase() === reference.toLowerCase().trim()
  );
}

/**
 * Gets a Bible quote.
 * @param {string} [reference] Optional. The reference of the verse to look for (e.g., "John 3:16").
 * If omitted, a random verse is returned.
 * @param {BibleVersion} [version='niv'] The Bible version to use. Defaults to 'niv'.
 * @returns {Verse | undefined} A Verse object, or undefined if the reference is not found.
 */
export function getQuote(
  reference?: string,
  version: BibleVersion = 'niv'
): Verse | undefined {
  if (reference) {
    return findVerse(reference, version);
  } else {
    return getRandomVerse(version);
  }
}

// Export types for package consumers.
export { Verse, BibleVersion };
