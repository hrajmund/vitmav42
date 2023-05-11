// Ha a felhasználó nincs belépve, akkor visszamegy a "/"-re
const User = require('../../models/user');

module.exports = function(objectrepository) {
    return function(req, res, next){
        if(typeof req.session.User == 'undefined'){
            return res.redirect('/');
        }
        objectrepository.User = User;
        return next();
    };
};