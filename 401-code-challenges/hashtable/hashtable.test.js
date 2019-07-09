'use strict';

const Hashtable = require('./hashtable');

describe('the hashtable', () => {
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
