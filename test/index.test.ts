import { getQuote, Verse, BibleVersion } from '../src/index';

describe('getQuote', () => {
  // Tests for random verse functionality
  describe('Random Verse Functionality', () => {
    it('should return a random verse from the NIV version by default', () => {
      const verse = getQuote();
      expect(verse).toBeDefined();
      expect(verse).toHaveProperty('book');
      expect(verse).toHaveProperty('chapter');
      expect(verse).toHaveProperty('verse');
      expect(verse).toHaveProperty('reference');
      expect(verse).toHaveProperty('text');
    });

    it('should return a random verse from the KJV version when specified', () => {
      const verse = getQuote(undefined, 'kjv');
      expect(verse).toBeDefined();
      expect(verse).toHaveProperty('book', expect.any(String));
      expect(verse).toHaveProperty('text', expect.any(String));
    });

    it('should return a random verse from the RVR1960 version when specified', () => {
      const verse = getQuote(undefined, 'rvr1960');
      expect(verse).toBeDefined();
      expect(verse).toHaveProperty('book', expect.any(String));
      expect(verse).toHaveProperty('text', expect.any(String));
    });
  });

  // Tests for specific verse search functionality
  describe('Specific Verse Functionality', () => {
    it('should find a specific verse in the NIV version', () => {
      const reference = 'John 3:16';
      const verse = getQuote(reference, 'niv');
      expect(verse).toBeDefined();
      expect(verse?.reference).toBe(reference);
      expect(verse?.text).toBe(
        'For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.'
      );
    });

    it('should find a specific verse in the KJV version', () => {
      const reference = 'Genesis 1:1';
      const verse = getQuote(reference, 'kjv');
      expect(verse).toBeDefined();
      expect(verse?.reference).toBe(reference);
      expect(verse?.text).toBe(
        'In the beginning God created the heaven and the earth.'
      );
    });

    it('should find a specific verse in the RVR1960 version', () => {
      const reference = 'Juan 3:16';
      const verse = getQuote(reference, 'rvr1960');
      expect(verse).toBeDefined();
      expect(verse?.reference).toBe(reference);
      expect(verse?.text).toBe(
        'Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito, para que todo aquel que en él cree, no se pierda, mas tenga vida eterna.'
      );
    });

    it('should be case-insensitive when searching for a reference', () => {
      const reference = 'juan 14:6';
      const verse = getQuote(reference, 'rvr1960');
      expect(verse).toBeDefined();
      expect(verse?.reference).toBe('Juan 14:6');
    });

    it('should handle leading/trailing whitespace in the reference', () => {
      const reference = '  Romanos 8:28  ';
      const verse = getQuote(reference, 'rvr1960');
      expect(verse).toBeDefined();
      expect(verse?.reference).toBe('Romanos 8:28');
    });

    it('should return undefined for a verse that does not exist', () => {
      const reference = 'Inexistente 1:1';
      const verse = getQuote(reference, 'niv');
      expect(verse).toBeUndefined();
    });
  });

  // Tests for exported types
  describe('Exported Types', () => {
    it('should export the Verse interface and BibleVersion type correctly', () => {
      const verse: Verse = {
        book: 'Test',
        chapter: 1,
        verse: 1,
        reference: 'Test 1:1',
        text: 'This is a test.',
      };
      const version: BibleVersion = 'niv';
      expect(verse).toBeDefined();
      expect(version).toBe('niv');
    });
  });
});
