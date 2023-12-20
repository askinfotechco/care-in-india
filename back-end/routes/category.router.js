const express = require('express');
const router = express.Router();
const {
  addCategory,
  addAllCategories,
  getAllCategory,
  getAllCategories,
  getActiveCategories,
  getCategoryById,
  updateCategory,
  updateStatus,
  deleteCategory,
  deleteManyCategories,
  updateManyCategories

} = require('../controllers/category.controller');

//add a category
router.post('/add', addCategory);

//add all category
router.post('/add/all', addAllCategories);

//get active categories
router.get('/show', getActiveCategories);

//get all categories
router.get('/', getAllCategory);

//get all categories
router.get('/all', getAllCategories);

//get category by ID
router.get('/:id', getCategoryById);

//update a category by ID
router.put('/:id', updateCategory);

//update category status
router.put('/status/:id', updateStatus);

//delete a category
router.delete('/:id', deleteCategory);

// delete many categories
router.patch('/delete/many', deleteManyCategories);

// update many categories
router.patch('/update/many', updateManyCategories);

module.exports = router;
