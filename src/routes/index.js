const {Router} = require('express');
const docentRouter = require('./docent.routes')
const departmentRouter = require('./department.routes')

const routes = Router();

routes.use('/docent', docentRouter );
routes.use('/department', departmentRouter );

module.exports = routes;