const Category = require('../../database/models/category')
const createCategory = require('../../actions/admin/categories/createCategory')
const categoryResponse = require('../../responses/category')
const deleteCategory = require('../../actions/admin/categories/deleteCategory')
const updateCategroy = require('../../actions/admin/categories/updateCategory')
const { validationResult } = require('express-validator')

const index = async (request, response) => {
    response.status(200).json({
        status: 'success',
        categories: categoryResponse.collection(await Category.find({})),
    })
}

const create = async (request, response) => {
    let errors = validationResult(request)

    if (!errors.isEmpty()) return response.status(200).json({errors: errors.array()})

    let category = await createCategory.create(request.body, request.file)

    response.status(200)
        .json({
            status: 'sucess',
            category: category,
            message: 'Category Created Successfully',
        })
}

const update = async (request, response) => {
    let errors = validationResult(request)

    if (!errors.isEmpty()) return response.status(200).json({errors: errors.array()})

    let category = await updateCategroy.update(request.params.id, request.body, request.file)

    response.status(200)
        .json({
            status: 'sucess',
            message: 'Category Updated Successfully',
            category: category,
        })
}

const deleteCategoryAdmin = (request, response) => {
    deleteCategory(request.params.id)

    response.status(200)
        .json({
            status: 'sucess',
            message: 'Category Deleted Successfully',
        })
}

module.exports = { index, create, update, deleteCategoryAdmin }