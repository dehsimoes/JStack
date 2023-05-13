const http = require('http');
const { URL } = require('url');

const bodyParser = require('./helpers/bodyParser')
const routes = require('./routes');

const port = 3000;

const server = http.createServer((request, response) => {
    const parsedUrl = new URL(`http://localhost:${port}${request.url}`);
    console.log(`Request method: ${request.method} | Endpoint ${parsedUrl.pathname}`);

    let { pathname } = parsedUrl;
    let id = null;

    const splitEndpoint = pathname.split('/').filter(Boolean);

    if(splitEndpoint.length > 1) {
        pathname = `/${splitEndpoint[0]}/:id`;
        id = splitEndpoint[1];
    }

    const route = routes.find((routesObj) => (
        routesObj.endpoint === pathname && routesObj.method === request.method
    ));

    if (route) {
        request.query = Object.fromEntries(parsedUrl.searchParams);
        request.params = { id }

        response.send = (statusCode, body) => {
            response.writeHead(statusCode, { 'Content-Type': 'text/html' });
            response.end(JSON.stringify(body));
        };

        if (['POST', 'PUT', 'PATH'].includes(request.method)) {
            bodyParser(request, () => route.handler(request,response));
        } else {
            route.handler(request, response);
        }
    } else {
        response.writeHead(404, { 'Content-Type': 'text/html' });
        response.end(`Cannot ${request.method} ${parsedUrl.pathname}`);
    }
});

server.listen(port, () => console.log(` Server started ate http://localhost:${port}`));
