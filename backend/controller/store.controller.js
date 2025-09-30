import Store from "../models/store.models.js";
import {getAuth} from "@clerk/express";
import User from "../models/user.models.js";

export const createStore = async (req, res) => {
    const { name, code, description, email,phone,website, timezone, address, openAt } = req.body
    if (!name || !code || !description || !email || !phone || !phone){
        res.status(400).json({
            message: 'All fields are required',
        })
    }
    try {
        const store = await Store.create({
            name,
            code,
            description,
            email,
            phone,
            website,
            timezone,
            address,
            openAt,
        })
        if(!store){
            res.status(400).json({
                message: 'Something went wrong',
            })
        }
    res.status(200).json({
        status: 'success',
        message: 'Store created successfully.',
        success: true

    })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            message: error.message,
        })
    }
}

export const getStores = async (req, res) => {
    const {userId} = getAuth(req)
    if (!userId){
        res.status(400).json({
            message: 'Unauthorized access',
            success: false

        })
    }
    const user = await User.find({clerkId: userId})
    try {
        const allStores = await Store.find({owner: user._id})
        if(!allStores){
            res.status(400).json({
                message: "No stores found",
            })
        }
        res.status(200).json({
            message: 'Store found successfully.',
            success: true,
            data: allStores
        })
    } catch (error){
        console.log(error)
        res.status(400).json({
            message: error.message,
        })
    }
}

export const getStoreById = async (req, res) => {

    const { id } = req.params
    if (!id){
        res.status(400).json({
            message: "ID is required",
        })
    }
    try {
        const store = await Store.findById(id)
        if(!store){
            res.status(400).json({
                message: "Store not found",
            })
        }
        res.status(200).json({
            message: 'Store found successfully.',
            success: true,
        })
    } catch (error){
        console.log(error)
        res.status(400).json({
            message: error.message,
        })
    }
}
export const updateStore = async (req, res) => {
    const {id} = req.params
    if(!id){
        res.status(400).json({
            message: "ID is required",
        })
    }
    const { name, description, email, phone, website, timezone, address, openAt} = req.body
    if(!name, !description, !email, !phone, !website, !timezone, !address, !openAt){
        res.status(400).json({
            message: "All fields are required!"
        })
    }
    try {
    const updatedStore = await Store.findByIdAndUpdate(id,{
        name,
        description,
        email,
        phone,
        website,
        timezone,
        address,
        openAt

    })
    } catch (error){
        console.log(error)
        res.status(500).json({
            message: error.message,
        })
    }

}
export const deleteStore = async (req, res) => {
    const {storeId} = req.params
    if(!storeId){
        res.status(400).json({
            message: "Store ID not found"
        })
    }
    try {
        const deletedStore = await Store.deleteOne({_id: storeId})
        if(!deletedStore){
            res.status(400).json({
                message: "Store not found"
            })
        }
        res.status(200).json({
            message: 'Store found successfully.',
            success: true,
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: error.message,
        })
    }
}
