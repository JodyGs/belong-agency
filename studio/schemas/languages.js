export default {
  name: 'languages',
  title: 'Languages',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'aboutWWA',
      title: 'About - Who we are',
      type: 'string',
    },
    {
      name: 'margaux',
      title: 'Margaux',
      type: 'string',
    },
    {
      name: 'magali',
      title: 'Magali',
      type: 'string',
    },
    {
      name: 'Margaux',
      title: 'About - Who we are',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
}
