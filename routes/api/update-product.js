var productModel=require('../../models/product');
var router=require('express').Router();

//update route
router.post('/:id',async(req,res)=>{
    
try
{
      //updated data  
      const updateName={Name,Description,RAM,Processor,Type}=req.body;;

      //finding the data by id and updating the record
      let data=await productModel.findOneAndUpdate({_id:req.params.id},
      updateName,
      {new:true});

      //save the record in database to validate updated Data
      await data.save();
      
      // Return updated Data
      res.send(updateName);
}
catch(err)
{
    return res.status(500).json({err:err.message});
}
});

module.exports=router;

