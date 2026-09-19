
import http from 'http'

const handleRequest = (req, res) => {
    // res.write('start')
    // res.end('here')
    console.log('coming here')
    const {method, url, headers} = req;
    console.log(req)

    // console.log(method);
    // console.log(url);
    // console.log(headers);

    let body = '';
    req.on('data', (chunk) => {
        body += chunk.toString()
    })
    // console.log(body)

    req.on('end', ()=> {
        console.log('arriving here')
        let parsedBody = null;
        try{
            if(body){
                parsedBody = JSON.parse(body)
            }
            console.log(parsedBody);
            // console.log(body)
            // const parseBody = JSON.parse(body);
            // console.log(parseBody)
            handleRoute(method, url, '', res);
        }catch(err){
            console.error('Error parsing body request', err)
            res.writeHead(400, {'Content-Type': 'text/plain'})
            res.end('Invalid request body')
        }
    })
}
const handleRoute = (method, url, body, res) => {
    switch(method){
        case 'GET':
            if(url === '/products'){
                console.log('coming here 22')
                res.writeHead(200, {'Content-Type': 'application/json'})
                res.end(JSON.stringify({'nj': 'nj'}))
            }
            break;
        default: 
            res.writeHead(405, {'Content-Type': 'text/plain'})
            res.end('Method not allowed')
    }
}



const server = http.createServer(handleRequest);
const port = 4121;



server.listen(port, () => {
    console.log('Server listing on port', port)
})
