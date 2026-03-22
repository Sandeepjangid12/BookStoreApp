// controller/book.controller.js
import Book from "../model/book.model.js";

export const getBook = async (req, res) => {
  try {
    console.log("API HIT 🔥");   // 👈 add this

    const book = await Book.find();
    console.log("DATA:", book);  // 👈 add this

    res.status(200).json(book);
  } catch (error) {
    console.log("Error: ", error);
    res.status(500).json(error);
  }
};