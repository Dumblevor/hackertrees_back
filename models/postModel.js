import mongoose from 'mongoose'
// import validator from 'validator';
import userModel from '../models/userModel.js'

const commentSchema = new mongoose.Schema({
  content: { type: String, required: true },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: false },
}, { timestamps: { createdAt: true, updatedAt: true } })

const postSchema = new mongoose.Schema({
  postContent: { type: String, minLength: 0, maxLength: 1000, required: false },
  tags: { type: [String], required: false },
  user: { type: mongoose.Schema.ObjectId, ref: "User", required: false },
  userComments: [commentSchema],
  upvotedBy: [userModel],
  downvotedBy: [userModel],
}, { timestamps: { createdAt: true, updatedAt: true } }
)

postSchema.index({ '$**': 'text' }, { autoIndex: false });


export default mongoose.model('Posts', postSchema)