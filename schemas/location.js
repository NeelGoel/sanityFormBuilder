export default {
    name: 'addresses',
    title: 'Addresses',
    type: 'document',
    fields: [
        {
            name: 'state',
            title: 'State',
            type: 'string',
        },
      {
        name: 'location',
        title: 'Select the Office Address from map',
        type: 'geopoint',
      },
    ],
  }
  