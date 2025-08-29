import Profile from "../models/profile.js";
import Contact from "../models/contact.js";
import Address from "../models/address.js";

export const createProfile = async(req,res)=>{
    try{
        
      const {firstname,lastname,id,phone,email,whatsapp,street,city,state,pincode} =req.body
      const fullname = `${firstname} ${lastname}`

      const profile = await Profile.create({firstname,lastname,fullname,id})
   
      const contact = await Contact.create({phone ,email,whatsapp,id})

      const address = await Address.create({street,city,state,pincode,id})

      res.status(200).json({profile,contact,address})

    }catch(err){
        res.status(500).json(err)
    }
}

export const getallProfiles = async(req,res)=>{
  try {
    const profiles = await Profile.findAll({
      include : [{model : Contact, as : "contacts"},
        {model : Address, as :"address"}]
    })
    res.status(200).json(profiles);
  } catch(err){
    res.status(500).json({err});
  }
};

export const getProfileById = async(req,res)=>{
  try {
    const profile = await Profile.findOne({
      where:{id : req.params.id},
      include : [{model : Contact, as : "contacts"},
        {model : Address, as :"address"}]
    });
    res.status(200).json(profile);
  }catch(err){
    res.status(500).json({err});
  }
};

export const updateProfile = async(req,res)=>{
  try {
    const {firstname, lastname} = req.body;
    const fullname = `${firstname} ${lastname}`;
    const updated = await Profile.update(
      {firstname, lastname, fullname},
      {where:{id:req.params.id}}
    );
    res.status(200).json(updated);
  }catch(err){
    res.status(500).json({err});
  }
};

export const deleteProfile = async(req,res)=>{
  try {
    const deleted = await Profile.destroy(
      {where:{id : req.params.id}});
    res.status(200).json(deleted);
  }catch(err){
    res.status(500).json({err});
  }
};
