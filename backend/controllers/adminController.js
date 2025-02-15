   import validator from "validator";
   import bcrypt from "bcrypt"
   import { v2 as cloudinary } from "cloudinary"
   import doctorModel from "../models/doctorModel.js";



   //API for adding doctor

   const addDoctor = async (req, res) => {
      try {
         const { name, email, password, speciality, degree, experience, about, fee, address } = req.body
         const imageFile = req.file

         //SEARCHING FOR ALL DATA TO ADD TO DOCTORS

         if(!name || !email || !password || !speciality || !degree|| !experience || !about || !fee || !address){
               return res.json({success: false, message: "missing details"})
         }

         //VALIDATING EMAIL
         if(!validator.isEmail(email )){
               return res.json({success: false, message: "Enter a valid Email"})
         }
         //VALIDATING STRONG PASSWORD
         if(password.length < 8){
            return res.json({success: false, message: "Enter a strong password"})
         }

         //HASHING DOCTOR PASSWORD
         const salt = await bcrypt.genSalt(10)
         const hashedPassword = await bcrypt.hash(password, salt)

         //IMAGE UPLOAD 
         // const imageUpload = await cloudinary.uploader.upload(imageFile.path, {resource_type: "image"})
         // const imageUrl = imageUpload.secure_url

         const doctorData = {
            name,
            email,
            //image: imageUrl,
            password: hashedPassword,
            speciality,
            degree,
            experience,
            about,
            fee,
            address: JSON.parse(address),
            date: Date.now()
         }

         const newDoctor = new doctorModel(doctorData)
         await newDoctor.save()

         res.json({success: true, message: "Doctor successfully added"})

      } catch (error) {
      console.log(error)
         res.json({success: false, message: error.message})
      }
   }

   export {addDoctor}