const { Router } = require("express");
const departments = require("../constants/departments")

const departmentRouter = Router();

departmentRouter.options("/", async (request, response) => {
    response.json(departments);
});


module.exports = departmentRouter;
