const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

// Add a new student
router.post('/add', async (req, res) => {
    try {
        const student = new Student(req.body);
        await student.save();
        res.status(201).json({ message: 'Student added', student });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// View all students
router.get('/', async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// View single student
router.get('/:id', async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        res.json(student);
    } catch (err) {
        res.status(404).json({ error: 'Student not found' });
    }
});

// Edit student
router.put('/edit/:id', async (req, res) => {
    try {
        const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json({ message: 'Student updated', student });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Delete student
router.delete('/delete/:id', async (req, res) => {
    try {
        await Student.findByIdAndDelete(req.params.id);
        res.json({ message: 'Student deleted' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
