/**
 * Lekérdezi az adott sörgyárat
 * Fejlesztés alatt
 */

module.exports = function(objectrepository) {
    return function(req, res, next){
        res.locals.gyar = {
            sorgyar: 'Dreher Sörgyárak Kft.',
            partnerek : ['Dózsa Söröző', 'Olds Club', 'SCH-FNT'],
            keszlet : 50000,
            szallitok: ['John Doe'],
            sorok : ['Dreher Gold', 'Dreher Ipa', 'Kőbányai Világos']
        }
    };
};