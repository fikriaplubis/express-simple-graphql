'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Student.init({
    firts_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    classroom: DataTypes.INTEGER,
    gender: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Student',
  });

  Student.associate = function (models) {
    Student.belongsTo(models.Classroom, { foreignKey: 'classroom', as: 'classroom' });
  };

  return Student;
};