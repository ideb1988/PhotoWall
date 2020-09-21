const express = require('express');
const router = express.Router();
const Photo = require('../Model/photo');
const Comment = require('../Model/comment');


router.get('/', async (req, res) => {
    res.json(`We are at /api page`);
});

// GET All Photos
router.get('/photos', async (req, res) => {
    try {
        const photos = await Photo.find().sort('-date');
        res.json(photos);
    } catch (err) {
        res.json(err);
    }
});

// GET 1 Photo
router.get('/photos/:id', async (req, res) => {
    try {
        const photo = await Photo.findById(req.params.id);
        res.json(photo);
    } catch (err) {
        res.json(err);
    }
});

// GET Comments for 1 Photo
router.get('/comments/:photoId', async (req, res) => {
    try {
        const comments = await Comment.find({
            photoId: req.params.photoId
        }).sort('-date');
        res.json(comments);
    } catch (err) {
        res.json(err);
    }
});

// POST 1 Photo
router.post('/photo', async (req, res) => {
    const photoObject = new Photo({
        url: req.body.url,
        description: req.body.description
    });

    try {
        const savedPhoto = await photoObject.save();
        res.json(savedPhoto);
    } catch (err) {
        res.json(err);
    }
});

// POST 1 Comment
router.post('/comment', async (req, res) => {
    const commentObject = new Comment({
        body: req.body.body,
        photoId: req.body.photoId
    });

    try {
        const savedComment = await commentObject.save();
        res.json(savedComment);
    } catch (err) {
        res.json(err);
    }
});

//DELETE a Photo
router.delete('/photo/:id', async (req, res) => {
    try {
        const deletedPhoto = await Photo.findByIdAndDelete(req.params.id);
        res.json(deletedPhoto);
    } catch (err) {
        res.json(err);
    }
});


module.exports = router;