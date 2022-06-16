const ClassroomService = require('../services/classroom');

module.exports = {
    Mutation: {
        async createClassroom(root, args) {
            const result = await ClassroomService.create(args);
            if(!result.isOk) {
                throw new Error(result.message);
            }

            return result.data;
        },

        async updateClassroom(root, args) {
            const result = await ClassroomService.update(args);
            if(!result.isOk) {
                throw new Error(result.message);
            }

            return result.data;
        },

        async deleteClassroom(root, args) {
            const result = await ClassroomService.delete(args);
            if(!result.isOk) {
                throw new Error(result.message);
            }

            return result.message;
        }
    },

    Query: {
        async classRooms(root, args) {
            return await ClassroomService.findAllWithSort(args);
        },
      },
};