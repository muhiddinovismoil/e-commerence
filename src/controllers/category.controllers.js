import { Category } from "../models/index.js";

export const createCategoryCon = async (req, res, next) => {
  try {
    const category = new Category(req.body);

    await category.save();

    res.send(category);
  } catch (error) {
    next(error);
  }
};

export const updateCategoryCon = async (req, res, next) => {
  try {
    const { id } = req.params;

    const category = await Category.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
      lean: true,
    });

    res.send(category);
  } catch (error) {
    next(error);
  }
};

export const getAllCategoryCon = async (req, res, next) => {
  try {
    const category = await Category.find();
    res.send(category);
  } catch (error) {
    next(error);
  }
};

export const getByIdCategoryCon = async (req, res, next) => {
  try {
    const category = await Category.findById(req.params.id);
    res.send(category);
  } catch (error) {
    next(error);
  }
};

export const removeByIdCategoryCon = async (req, res, next) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);
    res.send(category);
  } catch (error) {
    next(error);
  }
};
