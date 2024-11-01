import { Product } from "../models/index.js";

export const createProductCon = async (req, res, next) => {
  try {
    const product = new Product(req.body);

    await product.save();

    res.send(product);
  } catch (error) {
    next(error);
  }
};

export const updateProductCon = async (req, res, next) => {
  try {
    const { id } = req.params;

    const product = await Product.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
      lean: true,
    });

    res.send(product);
  } catch (error) {
    next(error);
  }
};

export const getAllProductCon = async (req, res, next) => {
  try {
    const product = await Product.find()
      .populate("category_id", "name description")
      .exec();
    res.send(product);
  } catch (error) {
    next(error);
  }
};

export const getByIdProductCon = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    res.send(product);
  } catch (error) {
    next(error);
  }
};

export const removeByIdProductCon = async (req, res, next) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    res.send(product);
  } catch (error) {
    next(error);
  }
};
