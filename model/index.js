import mongoose from  "mongoose"

 const form_num = new mongoose.Schema ({
    firstname: String,
    lastname: String,
 }) 
   
 const Form = mongoose.model('Form', form_num);

 export default Form;