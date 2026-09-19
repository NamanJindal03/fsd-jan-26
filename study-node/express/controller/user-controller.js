import User from "../model/user.js"
export const createUser = async (req, res) => {
    const user1 = await User.create({
        name: 'nj',
        emailId: 'nnjnjnj'
    })
    res.json(user1)
}