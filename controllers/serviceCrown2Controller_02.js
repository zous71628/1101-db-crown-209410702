const Category_02 =require('../models/Category_02');

exports.getCategories = async (req, res) =>{
    try{
        return await Category_02.fetchAll(); 

    }catch(err){
        console.log('getCategories',err);
    }
}