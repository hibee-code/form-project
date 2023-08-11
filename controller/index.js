import Form from "../model/index.js";

export const submit = async(req,res) => {
    // const firstName = req.body['Fname'].length;
    // const lastName = req.body['Lname'].length;

    try {
        console.log(req.body)
        const forms = await Form.create(req.body)
        
        console.log(forms)
        // const numOfLetters = firstName + lastName;
        res.render("index.ejs");
    } catch (error) {
        console.log(error)
    }
}



