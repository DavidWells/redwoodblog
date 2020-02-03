import { gql } from '@redwoodjs/api'

import Contacts from 'src/services/contacts'

export const schema = gql`
  type Contact {
    id: Int!
    name: String!
    email: String!
    message: String!
    createdAt: DateTime!
  }

  type Query {
    contacts: [Contact]
  }

  input ContactInput {
    name: String
    email: String
    message: String
  }

  type Mutation {
    createContact(input: ContactInput!): Contact
  }
`

export const resolvers = {
  Query: {
    contacts: (_root, args) => {
      return Contacts.contacts(args)
    },
  },

  Mutation: {
    createContact: (_root, args) => {
      return Contacts.createContact(args)
    },
  },
}
