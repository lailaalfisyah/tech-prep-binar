const { Products } = require('../models')

module.exports = {
  getProducts: (req, res) => {
    Products.findAll()
      .then(data => res.status(200).json(data))
  },

  getProduct: (req, res) => {
    Products.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(data => res.status(200).json(data))
  },

  postProduct: (req, res) => {
    Products.inputProduct(req.body)
      .then(data => res.status(201).json(data))
  },

  putProduct: (req, res) => {
    Products.editProduct(req.params.id, req.body)
      .then(data => res.status(201).json(data))
  },

  deleteProduct: (req, res) => {
    Products.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(data => res.status(200).json(data))
  }
}