const { gql } = require('apollo-server-express');

module.exports = gql`

    scalar Date
    
    type Classroom {
        id: Int!
        name: String!
    }

    input ClassroomSort {
        name: String
        createdAt: Date
    }

    extend type Query {
        classRooms(sort: ClassroomSort): [Classroom!]
    }

    extend type Mutation {
        createClassroom(name: String!): Classroom
        updateClassroom(id: Int!, name: String!): Classroom
        deleteClassroom(id: Int!): String
    }
`;