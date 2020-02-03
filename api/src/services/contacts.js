import { Photon } from '@prisma/photon'
import { UserInputError } from '@redwoodjs/api'

const photon = new Photon()

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
    return photon.contacts.findMany()
  },

  createContact: ({ input }) => {
    validate(input)
    return photon.contacts.create({ data: input })
  },
}

export default Contacts
