'use strict';

const Hashtable = require('./hashtable');

describe('the hashtable', () => {
  describe('contains()', () => {
    it('returns false for missing key', () => {
      // Arrange
      let ht = new Hashtable();

      // Act
      let result = ht.contains('missing');

      // Assert
      expect(result).toBe(false);
    });
  });

  describe('get()', () => {
    it('returns null for missing key', () => {
      // Arrange
      let ht = new Hashtable();

      // Act
      let result = ht.get('missing');

      // Assert
      expect(result).toBe(null);
    });
  });

  describe('add()', () => {
    it('works', () => {
      // Arrange
      let ht = new Hashtable();

      // Act
      ht.add('alexander', 'beeksma');

      // Assert
      expect(ht.contains('alexander')).toBe(true);
      expect(ht.get('alexander')).toBe('beeksma');
    });
  });

  describe('hash()', () => {
    it('will hash nullish stuff differently', () => {
      let ht = new Hashtable();

      let obj1 = null;
      let obj2 = undefined;

      expect(ht.hash(obj1)).not.toEqual(ht.hash(obj2));
    });

    it('will hash strings differently', () => {
      let ht = new Hashtable();

      let obj1 = 'hash me';
      let obj2 = 'hash me 2';

      expect(ht.hash(obj1)).not.toEqual(ht.hash(obj2));
    });

    it('will hash objects differently', () => {
      let ht = new Hashtable();

      let obj1 = {};
      let obj2 = { empty: false };

      expect(ht.hash(obj1)).not.toEqual(ht.hash(obj2));
    });
  });
});
