import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
const app = express();

const port = 4121;
//common middleware
app.use(cors()); //open to all rakha hua hai // any server can hit we can restrict it as well
app.use(cookieParser());
app.use(express.urlencoded({extended: false})) //now we are not sending the form data, json
app.use(express.json());

app.use((req, res, next) => {
    console.log(req)
    console.log('logger middleware');
    // console.log(req.body);
    console.log(req.cookies)
    //if body is present or not
    if(req.body){
        console.log('body exists')
    }
    else{
        console.log('body does not exist')
    }
    next();
})
app.get('/products', (req, res) => {
    res.json([
        {id: 'avdcf2232', name: 'Laptop', price: 4000000},
        {id: 'avdcffwefew2232', name: 'bottel', price: 234},
    ])
})

app.get('/handle-pathquery/:rollnumber', (req, res) => {
    const rollNumber = req.params.rollnumber;

    const standard = req.query.standard;


    console.log(rollNumber);
    console.log(standard)
    res.end(JSON.stringify({standard, rollNumber}))
})

function middleOne(req, res, next) {
    console.log('one');
    next();
}
function middleTwo(req, res, next){
    console.log('two');
    next();
}
app.get('/support', middleOne, middleTwo, (req, res) => {
    res.json({request: 'noted'})
})

app.get('/',middleOne ,middleTwo , (req, res, next) => {
    console.log('third');
    res.write('completed')
    res.end('naman')

    // console.log('')
})

app.listen(port, () => {
    console.log('Apppppp listenting', port)
})