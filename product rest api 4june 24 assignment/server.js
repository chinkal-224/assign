const express = require("express");
const app = express();
const PORT = 3000;

// Middleware to parse request body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// BONUS: Middleware to log method and URL
app.use((req, res, next) => {
  console.log(`Incoming request: ${req.method} ${req.url}`);
  next();
});

// In-memory product data
let products = [
  { id: 1, name: "Laptop", price: 49999, category: "Electronics" },
  { id: 2, name: "Shoes", price: 1999, category: "Fashion" },
  { id: 3, name: "Book", price: 499, category: "Education" }
];

// Home route
app.get("/", (req, res) => {
  res.send("Welcome to Product Management API!");
});

// GET all products
app.get("/products", (req, res) => {
  res.json(products);
});

// POST a new product
app.post("/products", (req, res) => {
  const { name, price, category } = req.body;

  if (!name || !price || !category) {
    return res.status(400).json({ message: "All fields are required: name, price, category" });
  }

  const newProduct = {
    id: products.length + 1,
    name,
    price,
    category
  };

  products.push(newProduct);
  console.log("Product added:", newProduct);
  res.status(201).json(newProduct);
});

// PUT to update a product by ID
app.put("/products/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find(p => p.id === id);

  if (product) {
    Object.assign(product, req.body);
    console.log("Product updated:", product);
    res.json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

// DELETE a product by ID
app.delete("/products/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const initialLength = products.length;
  products = products.filter(p => p.id !== id);

  if (products.length < initialLength) {
    console.log(`Product with ID ${id} deleted.`);
    res.json({ message: `Product with ID ${id} deleted.` });
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
