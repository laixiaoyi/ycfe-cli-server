module.exports = app => {
  const { mongoose } = app;
  const { Schema } = mongoose;
  const TemplateSchema = new Schema({
    name: { type: String },
    value: { type: String },
    npmName: { type: String },
    version: { type: String },
  });
  return mongoose.model('template', TemplateSchema);
};
