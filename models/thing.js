const mongoose = require('mongoose');

const thingSchemas = mongoose.Schema({
    title: { type: String, require: true },
    description: { type: String, require: true },
    imageUrl: { type: String, require: true },
    price: { type: Number, require: true },
    userId: { type: Number, require: true }
},
    { timestamps: true }
);

module.exports = mongoose.model('Thing', thingSchemas);

/* module.exports = mongoose => {
    const thingSchemas = mongoose.Schema({
        title: { type: String, require: true },
        description: { type: String, require: true },
        imageUrl: { type: String, require: true },
        price: { type: Number, require: true },
        userId: { type: Number, require: true }
    });

    thingSchemas.method("toJSON", function () {
        const { __v, _id, ...object } = this.toOject();
        object.id = _id;
        return object;
    });

    const Thing = mongoose.model("thing", thingSchemas);
    return Thing;

} */