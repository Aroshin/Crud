import Contact from "../models/contact.js";
import Profile from "../models/profile.js";

export const getallContacts = async(req,res)=>{
  try{
    const contacts = await Contact.findAll({
      include: [{model: Profile, as: "profile"}]
    });
    res.status(200).json(contacts);
  }catch(err){
    res.status(500).json({err});
  }
};

export const getContactById = async(req,res)=>{
  try {
    const contact = await Contact.findOne({
      where: {id :req.params.id},
      include: [{model: Profile, as: "profile"}]
    });
    res.status(200).json(contact);
  }catch(err){
    res.status(500).json({err});
  }
};

export const updateContact = async(req, res)=>{
  try {
    const {phone,email,whatapp} = req.body;
    const updated = await Contact.update(
      {phone, email, whatapp},
      {where:{id :req.params.id}}
    );
    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({err});
  }
};

export const deleteContact = async(req,res)=>{
  try {
    const deleted = await Contact.destroy(
      {where:{id :req.params.id}});
    res.status(200).json(deleted);
  }catch(err) {
    res.status(500).json({err});
  }
};
