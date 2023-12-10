const Category = require("../models/category.model");

const addCategory = async (req, res) => {
  try {
    const newCategory = new Category(req.body);
    await newCategory.save();
    res.status(200).send({
      message: "Category Added Successfully!",
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

// all multiple category
const addAllCategories = async (req, res) => {
  // console.log("category", req.body);
  try {
    await Category.deleteMany();

    await Category.insertMany(req.body);

    res.status(200).send({
      message: "Category Added Successfully!",
    });
  } catch (err) {
    console.log(err.message);

    res.status(500).send({
      message: err.message,
    });
  }
};

// get status show category
const getActiveCategories = async (req, res) => {
  try {
    const categories = await Category.find({ status: "show" }).sort({
      _id: -1,
    });

    const categoryList = readyToParentAndChildrenCategory(categories);
    // console.log("category list", categoryList.length);
    res.send(categoryList);
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

// get all parent and child category
const getAllCategory = async (req, res) => {
  try {
    const categories = await Category.find({}).sort({ _id: -1 });

    const categoryList = readyToParentAndChildrenCategory(categories);
    //  console.log('categoryList',categoryList)
    res.send(categoryList);
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find({}).sort({ _id: -1 });

    res.send(categories);
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const getCategoryById = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    res.send(category);
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

// update category
const updateCategory = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (category) {
      category.name = { ...category.name, ...req.body.name };
      category.description = {
        ...category.description,
        ...req.body.description,
      };
      category.icon = req.body.icon;
      category.status = req.body.status;
      category.parentId = req.body.parentId
        ? req.body.parentId
        : category.parentId;
      category.parentName = req.body.parentName;

      await category.save();
      res.send({ message: "Category Updated Successfully!" });
    }
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

// udpate many category
const updateManyCategories = async (req, res) => {
  try {
    const updatedData = {};
    for (const key of Object.keys(req.body)) {
      if (
        req.body[key] !== "[]" &&
        Object.entries(req.body[key]).length > 0 &&
        req.body[key] !== req.body.ids
      ) {
        updatedData[key] = req.body[key];
      }
    }

    await Category.updateMany(
      { _id: { $in: req.body.ids } },
      {
        $set: updatedData,
      },
      {
        multi: true,
      }
    );

    res.send({
      message: "Categories update successfully!",
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

// update category status
const updateStatus = async (req, res) => {
  // console.log('update status')
  try {
    const newStatus = req.body.status;

    await Category.updateOne(
      { _id: req.params.id },
      {
        $set: {
          status: newStatus,
        },
      }
    );
    res.status(200).send({
      message: `Category ${
        newStatus === "show" ? "Published" : "Un-Published"
      } Successfully!`,
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};
// delete category
const deleteCategory = async (req, res) => {
  try {
    console.log("id cat >>", req.params.id);
    await Category.deleteOne({ _id: req.params.id });
    await Category.deleteMany({ parentId: req.params.id });
    res.status(200).send({
      message: "Category Deleted Successfully!",
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }

  //This is for delete children category
  // Category.updateOne(
  //   { _id: req.params.id },
  //   {
  //     $pull: { children: req.body.title },
  //   },
  //   (err) => {
  //     if (err) {
  //       res.status(500).send({ message: err.message });
  //     } else {
  //       res.status(200).send({
  //         message: 'Category Deleted Successfully!',
  //       });
  //     }
  //   }
  // );
};

// delete multiple categories
const deleteManyCategories = async (req, res) => {
  try {
    const categories = await Category.find({}).sort({ _id: -1 });

    await Category.deleteMany({ parentId: req.body.ids });
    await Category.deleteMany({ _id: req.body.ids });

    res.status(200).send({
      message: "Categories Deleted Successfully!",
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};
const readyToParentAndChildrenCategory = (categories, parentId = null) => {
  const categoryList = [];
  let Categories;
  if (parentId == null) {
    Categories = categories.filter((cat) => cat.parentId == undefined);
  } else {
    Categories = categories.filter((cat) => cat.parentId == parentId);
  }

  for (let cate of Categories) {
    categoryList.push({
      _id: cate._id,
      name: cate.name,
      parentId: cate.parentId,
      parentName: cate.parentName,
      description: cate.description,
      icon: cate.icon,
      status: cate.status,
      children: readyToParentAndChildrenCategory(categories, cate._id),
    });
  }

  return categoryList;
};

module.exports = {
  addCategory,
  addAllCategories,
  getAllCategories,
  getActiveCategories,
  getCategoryById,
  updateCategory,
  updateStatus,
  deleteCategory,
  deleteManyCategories,
  getAllCategory,
  updateManyCategories,
};
