const express = require('express');

//Bring router
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;    


const { Student } = require('../models/Student');


// Get All Students
router.get('/api/Students', (req, res) => {
    Student.find({}, (err, data) => {
        if(!err) {
            res.send(data);
        } else {
            console.log(err);
        }
    });
});


// Get One Student By ID

router.get('/api/Student/:id', (req, res) => {
    Student.findById(req.params.id, (err, data) => {
        if(!err) {
            res.send(data);
        } else {
           console.log(err);
        }
    });
});



// Add New Student
router.post('/api/student/add', (req, res) => {
    const std = new Student({
        name: req.body.name,
        age: req.body.age,
    });
    std.save((err, data) => {
        if(!err) {
            // res.send(data);
            res.status(200).json({code: 200, message: 'Student Added Successfully', addStudent:data})
        } else {
           console.log(err);
        }
    });
});



// Update Student

router.put('/api/Student/update/:id', (req, res) => {

    const std = {
        name: req.body.name,
        age: req.body.age
    };
    Student.findByIdAndUpdate(req.params.id, { $set: std }, { new: true }, (err, data) => {
        if(!err) {
            res.status(200).json({code: 200, message: 'Student Updated Successfully', updateStudent: data})
        } else {
            console.log(err);
        }
    });
});



// Delete Student
router.delete('/api/Student/:id', (req, res) => {

    Student.findByIdAndRemove(req.params.id, (err, data) => {
        if(!err) {
            // res.send(data);
            res.status(200).json({code: 200, message: 'Student deleted', deleteStudent: data})
        } else {
            console.log(err);
        }
    });
});


module.exports = router;