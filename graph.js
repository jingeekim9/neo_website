

var cy = cytoscape({
  container: document.getElementById('cy'),
  style: [{
    selector: "node",
    css: {
      "label": "data(name)",
      "text-valign": "center",
      "text-halign": "center",
      "height": "data(score)",
      "width": "data(score)",
    }
  },
],
  elements: [ // flat array of nodes and edges
    { // node n1
      'group': 'nodes', // 'nodes' for a node, 'edges' for an edge
      // NB the group field can be automatically inferred for you but specifying it
      // gives you nice debug messages if you mis-init elements


      'data': { // element data (put json serialisable dev data here)
        'id': 'n1', 
        'score': 50,
        "name": 'node1'
      },
    },

    { // node n2
      group: 'nodes',
      data: { id: 'n2',
      score: 100,
      name: "node2"
          },
    },

    { // node n3
      group: 'nodes',
      data: { id: 'n3', score: 50, name: "node3"},
    },

    { // edge e1
      group: 'edges',
      data: {
        id: 'e1',
        // inferred as an edge because `source` and `target` are specified:
        source: 'n1', // the source node id (edge comes from this node)
        target: 'n2'  // the target node id (edge goes to this node)
        // (`source` and `target` can be effectively changed by `eles.move()`)
      },
    },
    {
      group: 'edges',
      data: {
        id: 'e2',
        source: 'n2',
        target: 'n3'
      }
    }
  ],
  zoomingEnabled: false
});
