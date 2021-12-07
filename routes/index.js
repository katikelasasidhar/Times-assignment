const express = require('express')
const router = express.Router()

var notesController = require('../api/controllers/notes')

module.exports = () => {
  router.get('/getLatestStories', notesController.getStories)
 
  return router
}
