import type { CollectionConfig } from 'payload'

const ContactSubmissions: CollectionConfig = {
  slug: 'contact-submissions',
  access: {
    create: () => true,
    read: ({ req: { user } }) => !!user,
  },
  admin: {
    useAsTitle: 'email',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      required: true,
    },
    {
      name: 'subject',
      type: 'text',
    },
    {
      name: 'message',
      type: 'textarea',
      required: true,
    },
    {
      name: 'submittedAt',
      type: 'date',
      admin: {
        date: {
          displayFormat: 'PPP',
        },
      },
      defaultValue: () => new Date(),
    },
  ],
}

export default ContactSubmissions
