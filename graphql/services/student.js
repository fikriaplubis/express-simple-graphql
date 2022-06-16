const { Student } = require("../../database/models");

const ClassroomService = require("./classroom");

module.exports = {
    async findById(id) {
        return await Student.findByPk(id);
    },

    async findAll(args) {
        const { sort, where } = args;

        const filter = {};
        if(where) {
            const loop = Object.keys(where).map(async function (key) {
                if(key === "classroom") {
                    const classroom = await ClassroomService.findByName(where[key]);
                    if(classroom['dataValues']) {
                        filter[key] = classroom['dataValues'].id;
                    }
                } else {
                    filter[key] = where[key];
                }
            });

            await Promise.all(loop);
        }

        const order = [];
        if(sort) {
            Object.keys(sort).map(function (key) {
                order.push([key, sort[key]]);
            });
        }

        return await Student.findAll({ where: filter, order: order });
    },

    async create(args) {
        try {
            const request = args.form;

            const result = await Student.create(request);
            if(!result) {
                return {
                    isOk: false,
                    message: "Failed to create classroom",
                    data: null
                }
            }

            return {
                isOk: true,
                message: "Success",
                data: result
            }
        } catch (error) {
            return {
                isOk: false,
                message: "Internal server error",
                data: null
            }
        }
    },

    async update(args) {
        try {
            const { id, form } = args;

            const student = await this.findById(id);

            if (!student) {
                return {
                    isOk: false,
                    message: 'Couldn’t find student',
                    data: null
                }
            }

            Object.keys(form).map(function (key) {
                student[key] = form[key];        
            });
        
            student.save();
            
            return {
                isOk: true,
                message: "Success",
                data: student
            }
        } catch (error) {
            return {
                isOk: false,
                message: "Internal server error",
                data: null
            }
        }
    },

    async delete(args) {
        try {
            const { id } = args;

            const student = await this.findById(id);

            if (!student) {
                return {
                    isOk: false,
                    message: 'Couldn’t find student',
                    data: null
                }
            }

            const result = await Student.destroy({ where: { id: id } });
            if (!result) {
                return {
                    isOk: false,
                    message: 'Failed to delete student',
                    data: null
                }
            }

            return {
                isOk: true,
                message: "Success deleted data",
                data: null
            }
        } catch {
            return {
                isOk: false,
                message: "Internal server error",
                data: null
            }
        }
    },

    async assignClassroom(args) {
        const { studentId, classroomId } = args;
        try {
            const student = await this.findById(studentId);
            if (!student) {
                return {
                    isOk: false,
                    message: 'Couldn’t find student',
                    data: null
                }
            }

            const classroom = await ClassroomService.findById(classroomId);
            if (!classroom) {
                return {
                    isOk: false,
                    message: 'Couldn’t find classroom',
                    data: null
                }
            }

            student.classroom = classroomId;
            student.save();

            return {
                isOk: true,
                message: "Success",
                data: student
            }
        } catch (error) {
            return {
                isOk: false,
                message: "Internal server error",
                data: null
            }
        }
    }
}