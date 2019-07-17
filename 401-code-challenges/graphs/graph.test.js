'use strict';

const Graph = require('./graph');

let testGraph = new Graph ();

describe('The Graph', () => {
  testGraph.addNode('node1');
  it('can add a node to the graph', () => {
    expect(testGraph.getNodes()).toEqual('node1')

  });

  it('can successfully add an edge to the graph', () => {

  });

  it('can retrieve a collection of nodes from the graph', () => {

  });

  it('can retrieve all apporiate neighbors from the graph', () => {

  });

  it('can retun neighbors with the weight between nodes included', () => {

  });

  it('can return the size of graphs (the number of nodes)', () => {

  });

  it('can return a graph that only has one node and one edge', () => {

  });

  it('will return (something usefull) for an empyt graph', () => {

  });
})