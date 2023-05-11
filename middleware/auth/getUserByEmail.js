//Betölti a felhasználót, a user paraméterével
const reqOption = require('../reqOption').reqOption;

module.exports = function (objectrepository){
    var user = reqOption(objectrepository, 'user');
    return function(req, res, next){

        //ha nem kaptuk meg az email-t
        if(typeof req.param('emailID') === 'undefined'){
            return next();
        }
        
        //ha már van elég param és 
        user.findOne({_id: req.param('user')}, function (err, result){
            if(err){
                return next(err);
            }

            res.tpl.user = result;
            return next();
        })
    }
}