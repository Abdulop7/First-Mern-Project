const express = require("express");
const { enquiryInsert, enquiryList, enquiryDel, singleEnquiry, updEnquiry } = require("../Controllers/enquiryController");
const enquiryRouter = express.Router();


enquiryRouter.post("/insert",enquiryInsert)
enquiryRouter.get("/view",enquiryList)
enquiryRouter.delete("/del/:id",enquiryDel)
enquiryRouter.get("/view-single/:id",singleEnquiry)
enquiryRouter.put("/upd/:id", updEnquiry)


module.exports = enquiryRouter;