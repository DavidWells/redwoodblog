import { server, makeMergedSchema } from '@redwoodjs/api'
import { Photon } from '@prisma/photon'

import * as contacts from 'src/graphql/contacts.sdl'
import * as posts from 'src/graphql/posts.sdl'

// Include new types here, ie. const schema = makeMergedSchema([users])
const schema = makeMergedSchema([contacts, posts])

const photon = new Photon()

export const handler = server({
  schema,
  context: { photon },
}).createHandler()
