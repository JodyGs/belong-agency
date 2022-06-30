export default {
  name: 'print',
  title: 'Print',
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
        type: 'magPrint'
      }
    },
  ],
}
