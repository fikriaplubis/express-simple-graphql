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

    input CreateStudent {
        first_name: String!
        last_name: String!
        classroom: Int
        gender: String!
    }

    input UpdateStudent {
        first_name: String
        last_name: String
        classroom: Int
        gender: String
    }

    extend type Mutation {
        createStudent(form: CreateStudent!): Student
        updateStudent(id: Int!, form: UpdateStudent): Student
        deleteStudent(id: Int!): String
    }
`;