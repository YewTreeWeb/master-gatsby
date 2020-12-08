import path from 'path'

const turnPizzasIntoPages = async ({ graphql, actions }) => {
  // 1. get a template for the page
  const pizzaTemplate = path.resolve('./src/templates/Pizza.js')
  // 2. query all pizzas
  const { data } = await graphql(`
  query {
    pizzas: allSanityPizza {
      nodes {
        name
        id
        slug {
          current
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
        mat: 'woop',
        url: pizza.slug.current
      }
    })
  })
}

export const createPages = async params => {
  // Create pages dynamically
  // 1. pizzas
  await turnPizzasIntoPages(params)
  // 2. toppings
  // 3. slicemasters
}
