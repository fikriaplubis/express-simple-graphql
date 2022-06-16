const { Student } = require("../../database/models");

const ClassroomService = require("./classroom");

module.exports = {
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
    }
}