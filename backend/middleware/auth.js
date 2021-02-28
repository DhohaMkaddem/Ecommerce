const jwt = require("jsonwebtoken")
// fixing process.env
const auth = (req, res, next) => {
    const token = req.header("x-auth-token")

   console.log(token)
    if (!token) {
        return res.status(401).send("Unauthorized");
      }
      try {
        const decoded = jwt.verify(token, 'eshop');
        req.user = decoded;
        next();
      } catch (err) {
      
        res.status(401).send("Invalid token");
      }
    };
    
    module.exports = auth;