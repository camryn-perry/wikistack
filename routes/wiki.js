const express = require('express');
const router = express.Router();
const addPage = require('../views/addPage');
const { Page } = require("../models");

router.get('/', (req, res) => {
  res.redirect('/')
})

router.get('/add', (req, res) => {
  res.send(addPage());
} )

function cleanSlug(title){
  return title.split(' ').join('_');
}

router.post('/', async (req, res, next) => {

  // STUDENT ASSIGNMENT:
  // add definitions for `title` and `content`
  //{"author":"","email":"","title":"","content":"    ","status":""}

  const page = new Page({
    title: req.body.title,
    content: req.body.content,
    slug: cleanSlug(req.body.title)
  });

  // make sure we only redirect *after* our save is complete!
  // note: `.save` returns a promise.
  try {
    await page.save();
    res.redirect('/');
  } catch (error) { next(error) }
});

module.exports = router;
