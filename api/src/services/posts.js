import { Photon } from '@prisma/photon'

const photon = new Photon()

const Posts = {
  posts: () => {
    return photon.posts.findMany()
  },

  post: ({ id }) => {
    return photon.posts.findOne({
      where: { id: id },
    })
  },

  createPost: ({ input }) => {
    return photon.posts.create({
      data: input,
    })
  },

  updatePost: ({ id, input }) => {
    return photon.posts.update({
      data: input,
      where: { id: id },
    })
  },

  deletePost: ({ id }) => {
    return photon.posts.delete({
      where: { id: id },
    })
  },
}

export default Posts
