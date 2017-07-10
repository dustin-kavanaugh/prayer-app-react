
var express          = require("express"), // for routing
    app              = express(), //instantiate the app
    bodyParser       = require("body-parser"),  //uh i think this is to interpret objects
    passport         = require("passport"),
    cookieParser     = require("cookie-parser"),
    LocalStrategy    = require("passport-local"),
    flash            = require("connect-flash"),
    session          = require("express-session"),
    expressSanitizer = require("express-sanitizer"),
    methodOverride   = require("method-override"); //this turns posts into put requests
    
//App config
//app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method")); // this is to create put requests
app.use(expressSanitizer()); //to sanitize input


    
app.get('/', function(req, res) {
    res.render('index.ejs')
});


app.listen(8080, process.env.IP, function() {
    console.log("Server running.");
});