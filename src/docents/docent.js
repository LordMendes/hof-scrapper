const cheerio = require("cheerio");

const { requestHtml } = require("../services/requestService");
const {docents} = require("../constants/sources")


getDocentList = async (department) => {
  try {
    const html = await requestHtml(docents, department);
    return getDocents(html);
  } catch (error) {
    console.error(error);
  }
};

getDocents = (html) => {
  const $ = cheerio.load(html);
  let docentList = [];
  $(".nome").each((i, el) => {
    const docentName = $(el).text().split("\n")[1].replaceAll("\t", "");
    docentList.push({ docentName });
  });
  $(".pagina a").each((i, el) => {
    const siape = el.attribs.href.match(/\=(.*)/)[1];
    docentList[i].siape = siape;
  });
  return docentList;
};

module.exports = {
    getDocentList
};