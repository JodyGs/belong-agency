export default {
  name: 'work',
  title: 'Work',
  type: 'document',
  fields: [
    {
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      title: 'Tags',
      name: 'tags',
      description: 'Tags are used to categorize your work. Write keywords and press "Enter" to add a new one.',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
      options: {
        layout: 'tags',
      },
    },
    {
      title: 'Tagsfr',
      name: 'tagsfr',
      description: 'Tags are used to categorize your work. Write keywords and press "Enter" to add a new one.',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
      options: {
        layout: 'tags',
      },
    },
  ],
}