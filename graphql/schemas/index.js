const { gql } = require('apollo-server-express');

const classRoomType = require('./classroom');
const studentType = require('./student');

const rootType = gql`
    type Query {
        root: String
    }
    type Mutation {
        root: String
    }

`;

module.exports = [rootType, classRoomType, studentType];