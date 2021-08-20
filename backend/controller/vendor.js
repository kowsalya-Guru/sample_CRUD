const bcrypt = require('bcrypt');
const jwt  = require('jsonwebtoken');

const { vendorModel } = require('../model.js/vendor');

exports.addVendor = (req, res, next) => {
    console.log("Inside job creation");
    console.log(req.body);
    req.body.active = true;
    let vendor = new vendorModel(req.body);
    vendor.save((err, r_vendor) => {
        if(err) {
           console.log(err);
            res.status(503).send(err);
        } else {
            console.log('save lead responded');
            res.send(r_vendor);
        }
    });
}

exports.readVendor = (req, res, next) => {
    let _query = {};
    if(Object.keys(req.query).length) {
        _query = req.query;
    }
    if(_query.active) _query.active = (_query.active == 'true' ? true: false);
    vendorModel.find(_query, (err, r_vendor) => {
        if(err) {
            console.log(err);
            res.status(503).send(err);
        } else {
            res.send(r_vendor);
        }
    });
}
exports.updateVendorById = (req, res, next) => {
    vendorModel.findByIdAndUpdate(req.params.id, req.body, { runValidators: true, context: 'query' },(err, r_vendor) => {
        if(err){
            console.log(err)
            res.status(503).send(err);
        } else if(r_vendor) {
            res.send(r_vendor);
        }
    })
}
exports.deleteVendorById = (req, res, next) => {
    vendorModel.findByIdAndUpdate(req.params.id, { active: false }, (err, r_vendor) => {
        if (err) {
            console.log(err)
            res.status(503).send(err);
        } else if (r_vendor) {
            res.send(r_vendor);
        }
    })
}