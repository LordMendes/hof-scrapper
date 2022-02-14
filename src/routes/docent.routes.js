const { Router } = require("express");
const { getDocentList } = require("../docents/docent");
const docentRouter = Router();

docentRouter.get("/:departmentId", async (request, response) => {
  const { departmentId } = request.params;
  const docentList = await getDocentList(departmentId);
  response.json(docentList);
});


module.exports = docentRouter;
