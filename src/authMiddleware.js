const authMiddleware = {

    authLogin: (req,res,next)=>{

        if(req.session.login == true){
            return next()
        }
        return res.redirect('/')
    },

    public: (req,res,next)=>{

        if(req.session.login == false){
            return next()
        }

        return res.redirect('/admin')
    }

}


module.exports = {authMiddleware}