import jwt from 'jsonwebtoken'

export const verifyToken = (req,res,next) => {
    const token = req.cookies.accessToken

    if(!token){
        return res.status(401).json({success: false, message:"Token not provided"})

    }
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) =>{
        if(err){
            return res.status(401).json({success: false, message:"Token is invalid"})
        }

        req.user = user
        next()

    })
}

export const verifyAdmin = (req, res, next) =>{
    verifyToken(req, res, () =>{
        if(req.user.role === 'admin') {
            next()
        } else {
            return res.status(401).json({success: false, message:"You're not authorized"})
        }
    })
}





