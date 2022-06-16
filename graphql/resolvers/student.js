const StudentService = require("../services/student");

module.exports = {
    Mutation: {
        async createStudent(root, args) {
            const result = await StudentService.create(args);
            if(!result.isOk) {
                throw new Error(result.message);
            }

            return result.data;
        },

        async updateStudent(root, args) {
            const result = await StudentService.update(args);
            if(!result.isOk) {
                throw new Error(result.message);
            }

            return result.data;
        },

        async deleteStudent(root, args) {
            const result = await StudentService.delete(args);
            if(!result.isOk) {
                throw new Error(result.message);
            }

            return result.message;
        },

        async assignClassroom(root, args) {
            const result = await StudentService.assignClassroom(args);
            if(!result.isOk) {
                throw new Error(result.message);
            }

            return result.data;
        }
    },

    Query: {
        async students(root, args) {
            return await StudentService.findAll(args);
        },
    },
}