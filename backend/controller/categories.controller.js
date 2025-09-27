import Category from "../models/categories.models.js";

export const createCategory = async (req, res) => {
    const { store,name, description } = req.body;
    if (!name || !description || !store) {
        res.status(400).json({
            message: 'Please enter name and description',
        })
    }
    try{
        const category = await Category.create({
            name,
            description,
            store,
        })
        if (!category) {
            res.status(400).json({message: 'Something went wrong while creating category'})
        }
        res.status(200).json({
            message: 'Successfully created category',
            data: category,
        })
    } catch (error) {
        console.error(error)
        res.status(400).json({message:"Error creating category"})
    }
}

export const getAllCategories = async (req, res) => {
    const { storeId } = req.params
    try{
        const categories = await Category.find({store: storeId})
        if (!categories) {
            res.status(404).json({message: 'No category found'})
        }
        res.status(200).json({
            data: categories,
            message: "Category found"
        })
    }catch(error){
        console.error(error)
        res.status(402).json({message:"Something went wrong"})
    }
}

export const updateCategory = async (req, res) => {
    const { storeId, name, description } = req.body;
    const {categoryId} = req.params
    if(!name || !description || !storeId || !name) {
        res.status(400).json({message: 'Please enter name and description',})
    }
    if(!categoryId ) {
        res.status(400).json({message: "Category ID not found"})
    }
    try {
        const updatedCategory = await Category.findByIdAndUpdate(categoryId, {
            name: name,
            description: description,
            store: storeId
        })
        if (!updatedCategory) {
            res.status(404).json({message: 'Category not found'})
        }
        res.status(200).json({
            data: updatedCategory,
            message: "Category updated"
        })
    } catch (error) {
        console.error(error)
        res.status(400).json({message:"Something went wrong"})
    }
}

export const deleteCategory = async (req, res) => {

    const { categoryId } = req.params
    if(!categoryId) {
        res.status(400).json({message: 'category ID not found',})
    }
    try {
        const deletedCategory = await Category.deleteOne(categoryId)

        if (!deletedCategory) {
            res.status(404).json({message: 'Category not found'})
            return;
        }
        res.status(200).json({
            message: 'Category deleted',
        })
    } catch (error){
        console.error(error)
        res.status(400).json({message:"Something went wrong"})
    }
}