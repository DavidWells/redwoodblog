import { PrismaClient } from '@prisma/client'
import { UserInputError } from '@redwoodjs/api'

const db = new PrismaClient()

const validate = (input) => {
  if (input.email && !input.email.match(/[^@]+@[^\.]+\..+/)) {
    throw new UserInputError("Can't create new contact", {
      messages: {
        email: ['is not formatted like an email address'],
      },
    })
  }
}

const Contacts = {
  contacts: () => {
    return db.contacts.findMany()
  },

  createContact: ({ input }) => {
    validate(input)
    return db.contacts.create({ data: input })
  },
}

export default Contacts
