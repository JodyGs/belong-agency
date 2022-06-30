export default {
  name: 'digital',
  title: 'Digital',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'url',
      title: 'URL',
      description: 'Write the complete url (https://example.com/page_example/)',
      type: 'url',
    },
    {
      name: 'date',
      title: 'Date',
      type: 'string',
    },
    {
      name: 'magazine',
      title: 'Magazine',
      description: 'Reference the magazine the publication is associated to:',
      type: 'reference',
      to: {
        type: 'magazines'
      }
    },
  ],
}
