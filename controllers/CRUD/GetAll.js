import userModel from "../../models/User.js"

const getAll = async (_, res)=>{
    try {
        let search = userModel.find();

        res.json({search});
    } catch (error) {
        res.json({error: error})
    }
}

export default getAll;