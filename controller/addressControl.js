import Address from "../models/address.js";

export const getallAddresses = async(req,res)=>{
  try{
    const addresses = await Address.findAll()
    res.status(200).json(addresses);
  }catch(err){
    res.status(500).json({err});
  }
};

export const getAddressById = async(req,res)=>{
  try {
    const address = await Address.findOne({
      where: {id :req.params.id},
    });
    res.status(200).json(address);
  }catch(err){
    res.status(500).json({err});
  }
};

export const updateAddress = async(req, res)=>{
  try {
    const {street, city, state, pincode} = req.body;
    const updated = await Address.update(
      {street, city, state, pincode},
      {where:{id :req.params.id}}
    );
    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({err});
  }
};

export const deleteAddress = async(req,res)=>{
  try {
    const deleted = await Address.destroy(
      {where:{id :req.params.id}});
    res.status(200).json(deleted);
  }catch(err) {
    res.status(500).json({err});
  }
};

export const getbystate = async(req,res)=>{
  try{
    const state = await Address.findAll({where : {state : req.params.state}})
    res.status(200).json(state)
  }catch(err){
    res.status(500).json(err)
  }
}