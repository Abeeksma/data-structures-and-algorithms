'use strict';

class Graph {
  constructor(){
    this.nodes = [],
    this.edges = {},
    this.nodeCount = 0,
    this.edgeCount = 0,
  }

  addNode(node) {
    this.nodes.push(node);
    this.edges[node] = [];
    this.nodeCount += 1; 
  }

  addEdge(node1, node2, weight = 1) {
    this.edges[node1].push({node: node2, weight});  
    this.edges[node2].push({node: node1, weight});
    this.edgeCount +=1;
  }

  addEdgeDirected(node1, node2, weight = 1){
    this.edges[node1].push({node: node2, weight});
    this.edgeCount += 1; 
  }

  getNodes() {
    let nodeCollection = [];
    for( let i = 0; i < this.nodes.length; i ++ ) {
      nodeCollection.push(this.nodes[i])
    }
    return nodeCollection;
  }

  // do i need do a traversal of the entire thing and look at edge connections
  getNeighbors() {
    
  }

  //number of nodes
  size() {
    return this.nodeCount;
  }

}

module.exports = Graph;