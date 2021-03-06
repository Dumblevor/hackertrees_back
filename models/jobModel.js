
import mongoose from "mongoose"


const jobCommentSchema = new mongoose.Schema({
  content: { type: String, required: true },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: false },
  likes: { type: Number, required: true },
  userLiked: { type: Array, required: true },
}, { timestamps: true })


const jobSchema = new mongoose.Schema({
  jobTitle: { type: String, required: true },
  jobShortSummary: { type: String, required: true },
  jobDescription: { type: String, required: true },
  jobSalary: { type: Number, required: true },
  jobLocation: { type: String, required: true },
  jobType: { type: String, required: true },
  companyName: { type: String, required: true },
  companyImage: { type: String, required: true },
  user: { type: mongoose.Schema.ObjectId, ref: "User" },
  comments: [jobCommentSchema],
  likes: { type: Number, required: true },
  userLiked: { type: Array, required: false },
})

export default mongoose.model('Job', jobSchema)

