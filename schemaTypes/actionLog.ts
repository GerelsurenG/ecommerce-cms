import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'action',
  title: 'action',
  type: 'document',
  fields: [
    defineField({
      name: 'actionId',
      title: 'Үйлдлийн дугаар',
      type: 'string',
    }),
    defineField({
      name: 'userId',
      title: 'Хэрэглэгчийн дугаар',
      type: 'string',
    }),
    defineField({
      name: 'type',
      title: 'Үйлдлийн төрөл',
      type: 'string',
    }),
    defineField({
      name: 'target',
      title: 'Үйлдлийн target ',
      type: 'string',
    }),
    defineField({
      name: 'date',
      title: 'Үйлдлийн огноо',
      type: 'string',
    }),
  ],
})
