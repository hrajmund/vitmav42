const renderMW = require('../middleware/renderMW');
const reqOption = require('../middleware/reqOption');

const authMW = require('../middleware/auth/authMW');
const checkUserLoginMW = require('../middleware/auth/checkUserLoginMW');
const getUserByEmailMW = require('../middleware/auth/getUserByEmail');
const handleWrongPassMW = require('../middleware/auth/handleWrongPassMW');
const regUserMW = require('../middleware/auth/regUserMW');
const sendPwMW = require('../middleware/auth/sendPwMW');

const delSorMW = require('../middleware/sor/delSorMW');
const getSorMW = require('../middleware/sor/getSorMW');
const getSorokMW = require('../middleware/sor/getSorokMW');
const saveSorMW = require('../middleware/sor/saveSorMW');

const delSorGyarMW = require('../middleware/gyar/delSorGyarMW');
const getSorGyarMW = require('../middleware/gyar/getSorGyarMW');
const getSorGyarakMW = require('../middleware/gyar/getSorGyarakMW');
const saveSorGyarMW = require('../middleware/gyar/saveSorGyarMW');

const User = require('../models/user');
const Sor = require('../models/sor');
const Gyar = require('../models/gyar');

module.exports = function (app){
    const objRepo = {
        User : User,
        Sor : Sor,
        Gyar : Gyar
    };

    app.use('/login',
        authMW(objRepo),
        getUserByEmailMW(objRepo),
        checkUserLoginMW(objRepo),
        renderMW(objRepo, 'login'));
    
    app.use('/sendmepw',
        getUserByEmailMW(objRepo),
        checkUserLoginMW(objRepo),
        renderMW(objRepo, 'login'));

    app.use('/reg', 
        regUserMW(objRepo),
        renderMW(objRepo, 'login'));

    app.use('/sorok/new',
        authMW(objRepo),
        saveSorMW(objRepo),
        renderMW(objRepo, 'edit'));

    app.use('/sorok/edit/:sorID',
        authMW(objRepo),
        getSorMW(objRepo),
        renderMW(objRepo, 'edit'));

    app.get('/sorok/delete/:sorID',
        authMW(objRepo),
        getSorMW(objRepo),
        delSorMW(objRepo));
    
    app.get('/sorok',
        authMW(objRepo),
        getSorokMW(objRepo),
        renderMW(objRepo, 'sorok'));

    app.use('/sorgyarak/edit_fact/:sorID',
        authMW(objRepo),
        getSorMW(objRepo),
        renderMW(objRepo, 'edit_fact'));

    app.get('/sorgyarak/:sorID',
        authMW(objRepo),
        getSorMW(objRepo),
        getSorGyarakMW(objRepo),
        renderMW(objRepo, 'sorgyarak'))

    app.use('/sorgyarak/:sorID/gyarID',
        authMW(objRepo),
        getSorMW(objRepo),
        getSorGyarMW(objRepo),
        saveSorGyarMW(objRepo),
        renderMW(objRepo, 'sorgyarak'));

    app.get('/sorgyarak/:sorID/gyarID/delete',
        authMW(objRepo),
        getSorGyarMW(objRepo),
        delSorGyarMW(objRepo),
        renderMW(objRepo, 'edit_fact'));

    app.get('/sorgyarak',
        authMW(objRepo),
        getSorokMW(objRepo),
        renderMW(objRepo, 'sorgyarak'));

    app.use('/', 
        authMW(objRepo),
        handleWrongPassMW(objRepo),
        renderMW(objRepo, 'index'));
}