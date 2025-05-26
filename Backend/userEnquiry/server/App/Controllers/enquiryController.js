const { enquiryModel } = require("../Models/enquiryModel");


function enquiryInsert(req,res){

    let {name,email,password,message}= req.body;

    let model = new enquiryModel({
        name : name,
        email:email,
        password:password,
        message :message
    })

    model.save().then(()=>{
        res.send({
            status:1,
            msg : "Entry Inserted"
        })
    }).catch((err)=>{
        console.log(err);
        
    })

}

async function enquiryList(req,res){

    let data = await enquiryModel.find()

    res.send({
        status:1,
        enquiry : data
    })
}

async function enquiryDel(req,res){

    let enID = req.params.id;

    let enquiry = await enquiryModel.deleteOne({_id:enID})

    res.send({
        status:1,
        msg: "Entry Deleted",
        enquiry
    })
}

async function singleEnquiry(req,res) {
    
    let enId = req.params.id 

    let viewRes = await enquiryModel.findOne({_id:enId})

    res.send({
        status:1,
        msg: viewRes
    })
}

async function updEnquiry(req,res){

    let id = req.params.id

    let {name,email,password,message}= req.body;

    let updatedObj = {
        name : name,
        email:email,
        password:password,
        message :message
    }

    let updRes = await enquiryModel.updateOne({_id:id},updatedObj)

    res.send({
        status:1,
        msg: updRes
    })

}



module.exports ={enquiryInsert,enquiryList,enquiryDel,singleEnquiry,updEnquiry};