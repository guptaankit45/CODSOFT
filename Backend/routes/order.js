const express = require("express");
const router = express.Router();
const {authenticateToken} = require("./userAuth.js");
const Book = require("../model/book.js");
const Order = require("../model/order.js");
const User = require("../model/user.js")
const { findByIdAndUpdate } = require("../model/user.js");

//place order
router.post("/place-order", authenticateToken, async (req, res) => {
    try {
        const { id } = req.headers;
        const { order } = req.body;

        for (const orderData of order) {
            const newOrder = new Order({ user: id, book: orderData._id });
            const orderDataFromDb = await newOrder.save();

            // Saving order in user model
            await User.findByIdAndUpdate(id, { $push: { orders: orderDataFromDb._id } });

            // Clearing cart
            await User.findByIdAndUpdate(id, { $pull: { cart: orderData._id } });
        }

        return res.json({
            status: "success",
            message: "Order placed successfully",
        });

    } catch (error) {
        console.error("Error placing order:", error);
        res.status(500).json({ status: "error", message: "Internal server error" });
    }
});

// get order history of particular user
router.get("/get-order-history",authenticateToken,async(req,res)=>{
    try{
        const {id}=req.headers;
        const userData = await User.findById(id).populate({
            path:"orders",
            populate:{path:"book"},
        });

        const orderData = userData.orders.reverse();

        return res.json({
            status:"Success",
            data: orderData,
        });

    }catch(error){
        console.log(error);
        return res.status(500).json({message:"An error occurred"});
    }
});
//get all user
router.get("/get-all-history",authenticateToken,async(req,res)=>{
    try{
       const userData = await Order.find()
       .populate({
        path:"book",
       })
       .populate({
        path:"user"
       })
       .sort({createdAt:-1});

       return res.json({
        status:"Success",
        data: userData,
       });

    }catch(error){
        console.log(error);
        return res.status(500).json({message:"An error occurred"});
    }
});

// update order -- admin
router.put("/update-status/:id",authenticateToken,async(req,res)=>{
    try{
        const {id} = req.params;

        await Order.findByIdAndUpdate(id,{status:req.body.status});

        return res.json({
            status: "Success",
            message:"Status Updated Successfully",
        });

    }catch(error){
        console.log(error);
        return res.status(500).json({message:"An error occurred"});
    }
});


module.exports= router;
