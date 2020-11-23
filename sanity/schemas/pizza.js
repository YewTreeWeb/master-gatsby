import { MdLocalPizza as icon } from 'react-icons/md'
export default {
  // Computer Name
  name: 'pizza',
  // visible title
  title: 'Pizzas',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Pizza Name',
      type: 'string',
      description: 'Name of the pizza'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100
      }
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      description: 'How much the pizza costs (£)',
      validation: Rule => Rule.min(10)
      // Todo: add custom input component
    },
    {
      name: 'toppings',
      title: 'Toppings',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'topping' }] }]
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
      toppings0: 'toppings.0.name',
      toppings0Veg: 'toppings.0.vegetarian',
      toppings1: 'toppings.1.name',
      toppings1Veg: 'toppings.1.vegetarian',
      toppings2: 'toppings.2.name',
      toppings2Veg: 'toppings.2.vegetarian',
      toppings3: 'toppings.3.name',
      toppings3Veg: 'toppings.3.vegetarian',
    },
    prepare: ({ title, media, ...toppings }) => {
      // 1. filter undefined toppings out
      //   const tops = Object.values(toppings).filter(Boolean) // Can filter a value to tru or false
      const tops = Object.values(toppings).filter(topping => {
        return topping !== undefined && topping !== ' '
      })

    //   console.log(tops)
      // 2. loop over all toppings to see if a pizza is all veggie
      const veggie = Object.values(toppings).filter(topping => {
        return topping === true || topping === false
      })
    //   console.log(veggie)
      // 3. return the preview object for the pizza
      return {
        title: veggie.every(e => e === true) ? `${title} 🌱 `: title,
        // title,
        media,
        subtitle: Object.values(tops).join(', ')
      }
    }
  }
}
