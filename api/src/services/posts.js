import { PrismaClient } from '@prisma/client'

const db = new PrismaClient()

const Posts = {
  posts: () => {
    return db.post.findMany()
  },

  post: ({ id }) => {
    return db.post.findOne({
      where: { id: id },
    })
  },

  createPost: ({ input }) => {
    return db.post.create({
      data: input,
    })
  },

  updatePost: ({ id, input }) => {
    return db.post.update({
      data: input,
      where: { id: id },
    })
  },

  deletePost: ({ id }) => {
    return db.post.delete({
      where: { id: id },
    })
  },
}

export default Posts
