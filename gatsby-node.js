const axios = require('axios');

exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }) => {
    const { createNode } = actions;
    const source = await axios('https://vp-store.herokuapp.com/products');
    const result = await source.data;
    result.forEach(item => 
        createNode({
            ...item,
            id: createNodeId(`Tester-${item['_id']}`),
            parent: null,
            children: [],
            internal: {
                type: 'Tester',
                content: JSON.stringify(item),
                contentDigest: createContentDigest(item),
            },
        })
    )

    return
}