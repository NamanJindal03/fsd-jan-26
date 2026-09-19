// mongoose.Schema({
//     customerName: {
//         type: String, //assume -> userSchema ->mongoose.Schema.Types.ObjectId
//         required: true
//     },
//     totalAmount: {
//         type: Number,
//         required: true,
//         min: 0
//     },
//     isPaid: {
//         type: Boolean,
//         default: false
//     },
//     orderDate: {
//         type: Date,
//         default: Date.now
//     },
//     status: {
//         type: String,
//         enum: ["Pending", "Processing", "Shipped", "Delivered", "Cancelled"],
//         default: "Pending"
//     },
//     address: {
//         city: String,
//         state: String,
//         pincode: Number
//     },
//     products: [
//         {
//             productName: {
//                 type: String,
//                 required: true
//             },
//             quantity: {
//                 type: Number,
//                 required: true,
//                 min: 1
//             },
//             price: {
//                 type: Number,
//                 required: true
//             }
//         }
//     ],
//     userId: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "User"
//     }

// });
// console.log(orderSchema);