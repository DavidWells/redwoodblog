/* eslint-disable no-console */
const dotenv = require('dotenv')
import { Photon } from '@prisma/photon'

const photon = new Photon()
dotenv.config()

async function main() {
  // Seed data is database data that needs to exist for your app to run.
  // Ideally this file should be idempotent: running it multiple times
  // will result in the same database state (usually by checking for the
  // existence of a record before trying to create it). For example:
  //
  //   await photon.user.find({ email: admin@redwoodjs.com }).orCreate({
  //     firstName: 'Admin',
  //     lastName: 'Istrator',
  //     email: 'admin@redwoodjs.com',
  //   })

  console.log('No data to seed. See api/prisma/seeds.js for info.')
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await photon.disconnect()
  })
