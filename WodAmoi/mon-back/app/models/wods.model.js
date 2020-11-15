module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      title: String,
      team: String,
      description: String,
      duration: String
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Wodder = mongoose.model("wod", schema);
  return Wodder;
};
