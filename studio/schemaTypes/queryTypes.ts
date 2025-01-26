// /studio/schemaTypes/queryType.ts
import { defineField, defineType } from 'sanity'

export const queryType = defineType({
  name: 'query',
  title: 'Query',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (rule) => rule.required(),
      description: 'Enter the full name of the person making the query.',  // Optional description
    }),
    defineField({
      name: 'email',
      type: 'string',
      title: 'Email',
      validation: (rule) => rule.required().email(),  // Added email format validation
      description: 'Enter a valid email address for the person making the query.',  // Optional description
    }),
    defineField({
      name: 'message',
      type: 'text',
      title: 'Message',
      validation: (rule) => rule.required(),
      description: 'Enter the query or message from the user.',  // Optional description
    }),
  ],
})
