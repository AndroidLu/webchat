const mongoose = require('mongoose')

const SearchSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  ip: String,
  keyword: {
    type: String,
    max: 30
  },
  time: {
    type: Date,
    default: Date.now()
  }
})
//静态方法
SearchSchema.statics = {
  fetch: function (cb) {
    return this
      .find({})
      .sort('time')
      .exec(cb)
  },
  findById: function (id, cb) {
    return this
      .findOne({_id: id})
      .exec(cb)
  }
}
module.exports = SearchSchema