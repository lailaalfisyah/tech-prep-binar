'use strict';
const { Model } = require('sequelize');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    static #encrypt = password => bcrypt.hashSync(password, 10)

    static signUp = ({ name, email, password }) => {
      const encryptedPassword = this.#encrypt(password)

      return this.create({
        name,
        email,
        password: encryptedPassword
      })
    }

    checkPassword = password => bcrypt.compareSync(password, this.password)

    generateToken = () => {
      const payload = {
        id: this.id,
        email: this.email
      }
      const theSecret = 'Backend Mock Test Programming'
      const token = jwt.sign(payload, theSecret)

      return token
    }

    static authenticate = async ({ email, password }) => {
      try {
        const user = await this.findOne({
          where: { email }
        })
        const isPasswordValid = user.checkPassword(password)

        if (!isPasswordValid) return Promise.reject('Wrong password')
        return Promise.resolve(user)
      } 
      catch(err) {
        return Promise.reject('User not found!')
      }
    }
  };

  Users.init({
    name: DataTypes.STRING(50),
    email: DataTypes.STRING(50),
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};