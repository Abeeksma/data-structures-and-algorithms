'use strict';

const ht = require('../hashtable/hashtable');
const Tree = require('../Trees/BinaryTree');
const intersectTree = require('./tree-instersect');

let tree1 = new Tree();
let tree2 = new Tree();
let tree3 = new Tree();

describe('the intersectTree set finding fun', () => {
  it('can insert nodes into the hash table', () => {
    expect(intersectTree(tree1, tree2)) // to be something?
  });

  it('will return true if there is a set between two trees', () => {
    expect(intersectTree(tree1, tree2)).toBe(true);
  });

  it('will return false if there is no set between two trees', () => {
    expect(intersectTree(tree1, tree3)).toBe(false);
  });

});