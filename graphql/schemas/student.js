const { gql } = require('apollo-server-express');

module.exports = gql`

    type Student {
        id: Int!
        first_name: String!
        last_name: String!
        classroom: Int
        gender: String!
    }

    input StudentFilter {
        gender: String
        classroom: String
    }

    input StudentSort {
        first_name: String
        last_name: String
        gender: String
    }

    extend type Query {
        students(where: StudentFilter, sort: StudentSort): [Student!]
    }

    input StudentInput {
        first_name: String!
        last_name: String!
        classroom: Int
        gender: String!
    }

    extend type Mutation {
        createStudent(form: StudentInput!): Student
        updateStudent(id: Int!, form: StudentInput): Student
        deleteStudent(id: Int!): String
    }
`;