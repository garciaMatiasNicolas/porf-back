import userModel from "../../models/User.js";

const SignUp = async (req, res)=>{
    try {
        let {fullname, email, birth, phone, studentsLevel, subject, location, password, description} = req.body;
    
        let search = await userModel.find({email: email});
    
        if (search == []) {
            res.json({data: "email alredy in use"});
        } else {
            let newUser = new userModel ({
                fullname: fullname,
                email: email, 
                birth: birth, 
                phone: phone, 
                studentsLevel: studentsLevel, 
                subject: subject, 
                location: location, 
                password: password, 
                description: description
            });

            await newUser.save();

            res.json({newUser});

        }


    } catch (error) {
        res.json({error})
    }
}

export default SignUp