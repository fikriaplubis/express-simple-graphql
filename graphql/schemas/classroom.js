const { gql } = require('apollo-server-express');

module.exports = gql`

    type Classroom {
        id: Int!
        name: String!
    }

    input ClassroomSort {
        name: String
    }

    type Query {
        classRooms(sort: ClassroomSort): [Classroom!]
    }

    type Mutation {
        createClassroom(name: String!): Classroom
        updateClassroom(id: Int!, name: String!): Classroom
        deleteClassroom(id: Int!): String
    }
`;