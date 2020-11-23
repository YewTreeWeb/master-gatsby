import { MdPerson as icon } from 'react-icons/md'
export default {
  // Computer Name
  name: 'person',
  // visible title
  title: 'Slicemasters',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Person Name',
      type: 'string',
      description: 'Name of person'
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
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Tell us about the person'
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      }
    }
  ]
}
