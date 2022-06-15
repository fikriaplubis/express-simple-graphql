const { Classroom } = require("../../database/models");

module.exports = {
    Mutation: {
        async createClassroom(root, args) {
            const { name } = args;
            return Classroom.create({ name });
        },
    },

    Query: {
        async classRooms(root, args) {
            const { sort } = args;
            const { className } = sort;
            return Classroom.findAll({
                order: [
                    ['name', className],
                ],
            });
        },
      },
};