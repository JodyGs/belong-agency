export default {
  name: 'publications',
  title: 'Publications',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'url',
      title: 'URL',
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
