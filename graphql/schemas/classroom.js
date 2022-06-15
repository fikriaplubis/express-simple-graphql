const { gql } = require('apollo-server-express');

module.exports = gql`

    type Classroom {
        id: Int!
        name: String!
    }

    input ClassroomSort {
        className: String
    }

    type Query {
        classRooms(sort: ClassroomSort): [Classroom!]
    }

    type Mutation {
        createClassroom(name: String!): Response
        updateClassroom(id: Int!, name: String!): Response
        deleteClassroom(id: Int!): Response
    }

    type Response {
        id: Int!
        name: String!
    }
`;