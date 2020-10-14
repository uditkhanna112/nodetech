var productModel=require('../../models/product');
var router=require('express').Router();


         //Request to fetch all records
router.get('/',
async(req,res)=>{

try
{
        //finds all the documents from database       
        let data=await productModel.find();
        res.send(data);
}
catch(err)
{
        return res.status(500).send({error:err.message});
}
});

        //request to get particular product
router.get('/:id',
async(req,res)=>{
        try{
let data=await productModel.findById(req.params.id);
res.send(data);
        }
        catch(err){
                return res.status(500).send({error:"The Product does not exist"});
        }
}
)

module.exports=router;