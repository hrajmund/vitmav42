const reqOption = require('../reqOption');

module.exports = function(objectrepository){
    var User = reqOption.reqOption(objectrepository, 'User');
    return function(req, res, next){
        if ((typeof req.body === 'undefined') || (typeof req.body.email === 'undefined') || (typeof req.body.password === 'undefined')) {
        return next();
      }
        User.findOne({
            email: req.body.email
        }, function(err, result){
            if((err) || (!result)){
                res.tpl.error.push('Email-címed nincs regisztrálva!');
                return next();
            }

            if(result.password !== req.body.password){
                res.tpl.error.push('Rossz jelszó!');
                return next();
            }

            req.session.User = result._id;
            return res.redirect('/');
        });

    };
};