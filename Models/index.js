'use strict'

let mongoose = require('mongoose')
let config = require('../config')
let autoIncrement = require('mongoose-auto-increment')

let connection = mongoose.connect(config.db_path, (error) => {
  // if (error) {
  //   console.error('Connect Database Error! : ' + err.message)
  //   return process.exit(1)
  // }
  error && {
  	console.error('Connect Database Error! : ' + err.message)
  	return process.exit(1)
	}
})

autoIncrement.initialize(connection)


// exports.AnthorModel = require("./anthor")
exports.ArticleModel = require("./article")
// exports.CommentModel = require("./comment")
// exports.QuestionModel = require("./question")
// exports.TagModel = require("./tag")
// exports.UserModel = require("./user")
