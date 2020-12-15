import path from 'path'
import fetch from 'isomorphic-fetch'

const turnPizzasIntoPages = async ({ graphql, actions }) => {
  // 1. get a template for the page
  const pizzaTemplate = path.resolve('./src/templates/Pizza.js')
  // 2. query all pizzas
  const { data } = await graphql(`
    query {
      pizzas: allSanityPizza {
        nodes {
          name
          slug {
            current
          }
        }
      }
    }
  `)
  // 3. loop over each pizza and create a page for that pizza
  data.pizzas.nodes.forEach(pizza => {
    actions.createPage({
      // what is the url for this page
      path: `pizza/${pizza.slug.current}`,
      component: pizzaTemplate,
      context: {
        slug: pizza.slug.current
      }
    })
  })
}

const turnToppingsIntoPages = async ({ graphql, actions }) => {
  // 1. Get the template
  const toppingTemplate = path.resolve('./src/pages/pizzas.js')
  // 2. Query all the toppings
  const { data } = await graphql(`
    query {
      toppings: allSanityTopping {
        nodes {
          name
          id
        }
      }
    }
  `)
  // 3. Create page for that topping
  data.toppings.nodes.forEach(topping => {
    actions.createPage({
      path: `topping/${topping.name}`,
      component: toppingTemplate,
      context: {
        topping: topping.name,
        toppingRegex: `/${topping.name}/i`
      }
    })
  })
  // 4. Pass topping data to pizza.js
}

const fetchBeersIntoNodes = async ({
  actions,
  createNodeId,
  createContentDigest
}) => {
  if (process.env.NODE_ENV !== 'production') {
    console.log('Turn beers into nodes!')
  }
  // 1. Fetch list of beers
  const response = await fetch('https://sampleapis.com/beers/api/ale')
  const beers = await response.json()
  // 2. Loop over each one
  // can use foreach
  for (const beer of beers) {
    // create a node for each beer
    const nodeMeta = {
      id: createNodeId(`beer-${beer.name}`),
      parent: null,
      children: [],
      internal: {
        type: 'Beer',
        mediaType: 'application/json',
        contentDigest: createContentDigest(beer)
      }
    }
    actions.createNode({
      ...beer,
      ...nodeMeta
    })
  }
  // 3. Create a node for that beer
}

export const sourceNodes = async params => {
  // Fetch a list of beers and source them into our gatsby API
  await Promise.all([fetchBeersIntoNodes(params)])
}

export const createPages = async params => {
  if (process.env.NODE_ENV !== 'production') {
    console.log('CREATING PAGES!!!!')
  }
  // Create pages dynamically
  // Wait for all promises to be resolved before finishing this function
  await Promise.all([
    turnPizzasIntoPages(params),
    turnToppingsIntoPages(params)
  ])
}
