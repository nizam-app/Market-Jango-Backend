const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema(
    {
        name: String,
        parentCategoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', default: null },
        image: String,
        isActive: { type: Boolean, default: true },
        createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    },
    { timestamps: true }

);

const Category = mongoose.model('Category', CategorySchema);