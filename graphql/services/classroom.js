const { Classroom } = require("../../database/models");

module.exports = {
    async findById(id) {
        return await Classroom.findByPk(id);
    },

    async findByName(name) {
        return await Classroom.findOne({ where: { name: name } });
    },

    async findAllWithSort(args) {
        const { sort } = args;

        const order = [];

        Object.keys(sort).map(function (key) {
            order.push([key, sort[key]]);
        });

        return await Classroom.findAll({ order: order });
    },

    async create(args) {
        try {
            const { name } = args;

            const result = await Classroom.create({ name });
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
        } catch {
            return {
                isOk: false,
                message: "Internal server error",
                data: null
            }
        }
    },

    async update(args) {
        try {
            const { id, name } = args;

            const classroom = await this.findById(id);

            if (!classroom) {
                return {
                    isOk: false,
                    message: 'Couldn’t find classroom',
                    data: null
                }
            }
            
            classroom.name = name;
            classroom.save();
            
            return {
                isOk: true,
                message: "Success",
                data: classroom
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

            const classroom = await this.findById(id);

            if (!classroom) {
                return {
                    isOk: false,
                    message: 'Couldn’t find classroom',
                    data: null
                }
            }

            const result = await Classroom.destroy({ where: { id: id }});
            if(!result) {
                return {
                    isOk: false,
                    message: 'Failed to delete classroom',
                    data: null
                }
            }

            return {
                isOk: false,
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
    }
}