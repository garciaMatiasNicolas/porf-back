import mongoose from "mongoose";

// Server running //
export const runServer = (app, PORT) =>{
    app.listen(PORT, ()=>{
        console.log("Server running on port 8080");
    });
}

// Database //
export const database = ()=>{
    mongoose.connect("mongodb+srv://matigarcia:1708@test.0vglzka.mongodb.net/?retryWrites=true&w=majority")
    .then(()=>{
        console.log("Database MongoDb is connected");
    }) 
}