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
    },

    Query: {
        async students(root, args) {
            return await StudentService.findAll(args);
        },
    },
}