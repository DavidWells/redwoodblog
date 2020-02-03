import { gql } from '@redwoodjs/api'

import Posts from 'src/services/posts'

export const schema = gql`
  type Post {
    id: Int!
    title: String!
    body: String!
    createdAt: DateTime!
  }

  type Query {
    posts: [Post]
    post(id: Int!): Post
  }

  input PostInput {
    title: String
    body: String
  }

  type Mutation {
    createPost(input: PostInput!): Post
    updatePost(id: Int!, input: PostInput!): Post
    deletePost(id: Int!): Post
  }
`

export const resolvers = {
  Query: {
    posts: (_root, args) => {
      return Posts.posts(args)
    },

    post: (_root, args) => {
      return Posts.post(args)
    },
  },

  Mutation: {
    createPost: (_root, args) => {
      return Posts.createPost(args)
    },

    updatePost: (_root, args) => {
      return Posts.updatePost(args)
    },

    deletePost: (_root, args) => {
      return Posts.deletePost(args)
    },
  },
}
