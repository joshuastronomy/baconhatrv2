const express = require('express');
const mongoose = require('mongoose');

const likeSchema = new mongoose.Schema({
  messageId: {type: mongoose.Schema.ObjectId, required: true},
  total: Number,
  likes:[{
      _id: {type: mongoose.Schema.ObjectId},
      author: String,
      state: Boolean
  }]
});

likeSchema.pre('save', function(next)  {

  if (!this.created_at) this.created_at = new Date();
  next();
});

const like = mongoose.model('likes', likeSchema);

module.exports = like;
