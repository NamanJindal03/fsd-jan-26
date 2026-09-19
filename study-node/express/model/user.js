import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
    address1: String,
    address2: String,
    state: String, 
    country: String,
    pinCode: Number
})

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
    },
    age: {
        type: Number,
        min: 10,
        max: 150,
        validate: {
            validator: numb => numb %2 === 0,
            message: prop => `provided age is not an even age`
        }
    },
    email: {
        type: String,
        required: true,
        lowercse: true
    },
    password: {
        type: String,
        required: true
    },
    // friends: [mongoose.SchemaType.ObjectId],
    hobbies: [String],
    address: addressSchema,
    count: String,

}, {timestamps: true})

userSchema.methods.printHello = function(){
    console.log('hello', this.name)
}

//lets say we want to extract the fullname of the user -> virtuals
userSchema.virtual('fullName').get(function(){
    return `${this.name} ${this.lastName}`
})

//pre and post hooks -> action 
// userSchema.post('save', function(next){
//     this.count = this.count+1
//     next();
// })




export default mongoose.model("User", userSchema)