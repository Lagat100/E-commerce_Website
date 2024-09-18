// productController.js is where the logic for handling product-related requests is stored.

// Get all products
exports.getProducts = (req, res) => {
    res.status(200).json({
      message: "Fetching all products"
    });
  };
  
  // Create a new product
  exports.createProduct = (req, res) => {
    const { name, price, description, stock } = req.body;
  
    // interacting with the database to save the product
    res.status(201).json({
      message: "Product created successfully",
      product: {
        name,
        price,
        description,
        stock
      }
    });
  };
  
  // Update an existing product
  exports.updateProduct = (req, res) => {
    const productId = req.params.id;
    const updatedData = req.body;
  
    // Update product in the database
    res.status(200).json({
      message: `Product with ID ${productId} updated`,
      updatedData
    });
  };
  
  // Delete a product
  exports.deleteProduct = (req, res) => {
    const productId = req.params.id;
  
    // Delete product from the database
    res.status(200).json({
      message: `Product with ID ${productId} deleted`
    });
  };
  