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
    return db.contact.findMany()
  },

  createContact: ({ input }) => {
    validate(input)
    return db.contact.create({ data: input })
  },
}

export default Contacts
