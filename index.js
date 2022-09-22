const require = ("http");
const port = 3000;

const app = http.createServer((req,res)=>{
    res.write("<h1>HelloWord</h1>");
    res.write("<h3> I has deployed my Nodejs to heroku!</h3>");
    res.end();
});

app.listen(port);