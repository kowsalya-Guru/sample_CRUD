const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

var vendorModelObj = {};

const vendorSchema = new Schema({
    name: { type: String },
    type: { type: String },
    email: { type: String},
    url: { type: String},
    active: Boolean,
    createdBy: ObjectId,
    updatedBy: ObjectId
}, {
    timestamps: true
});

vendorModelObj.vendorModel = mongoose.model("vendor", vendorSchema, "vendor");

module.exports = vendorModelObj;
