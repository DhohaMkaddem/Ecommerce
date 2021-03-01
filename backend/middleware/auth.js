const jwt = require("jsonwebtoken")

const auth = (req, res, next) => {
    const token = req.header("x-auth-token")

   
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

