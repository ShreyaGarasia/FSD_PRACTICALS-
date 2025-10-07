const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  age: { type: Number, min: 1 },
  className: { type: String, trim: true }, // use className to avoid reserved keywords
  email: { type: String, trim: true, lowercase: true }
}, { timestamps: true });

// transform to return 'class' field in JSON (to match frontend)
studentSchema.set('toJSON', {
  transform: (doc, ret) => {
    ret._id = ret._id.toString();
    ret.class = ret.className || '';
    delete ret.className;
    delete ret.__v;
    return ret;
  }
});

module.exports = mongoose.model('Student', studentSchema);
