const express = require("express");
let router = express.Router();
var Product =require("../../models/product");
//get products

router.get("/",async(req,res)=>{

    let products = await Product.find();
    return res.send(products);
});

//get single product

router.get("/:id", async (req, res) => {
    try {
      let product = await Product.findById(req.params.id);
      if (!product)
        return res
          .status(400)
          .send("Product With Given Id Not Found In Database");
      return res.send(product);
    } catch (err) {
      return res.status(400).send("Invalid Id");
    }
  });

  //add a new record
  router.post("/",async (req,res)=>{
      let product = new Product();
      product.name=req.body.name;
      product.price=req.body.price;

      await product.save();

      return res.send(product);

  });

  //update a record
  router.put("/:id",async (req,res)=>{
    let product = await Product.findById(req.params.id);
    product.name=req.body.name;
    product.price=req.body.price;
    

    await product.save();

    return res.send(product);

});
module.exports = router; 