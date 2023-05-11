/**
 * Lekérdezi az adott sört az adatbázisból
 * Fejlesztés alatt
 */

module.exports = function(objectrepository) {
    return function(req, res, next){
        res.locals.sor = {
            nev: 'Dreher Gold',
            sorgyar : 'Dreher Sörgyárak Kft.',
            keszlet : 10000
        };
        return next();
    };
};