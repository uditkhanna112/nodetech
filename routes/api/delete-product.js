var productModel=require('../../models/product');
var router=require('express').Router();


//Request to update the data
router.delete('/:id',
async(req,res)=>{

try{
         //finds the document from database with matching id       
        let data=await productModel.findById(req.params.id);

        //if the product does not exist
        if(!data)
        {
           return res.status(404).json({msg:'Product Not Found'});
        }

        //removing data
        await data.remove();

        res.send('Data Removed');
}
catch(err)
{
        res.status(500).send({error:err.message});
}
});

module.exports=router;