const { XMLHttpRequest } = require("xmlhttprequest");

const requestHtml = (url, department) =>
new Promise((resolve, reject) => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url + department, true);
  xhr.send();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      const html = xhr.responseText;
      if (xhr.status === 200) {
        resolve(html);
      } else {
        reject(new Error("Request Promise Error"));
      }
    }
  };
});

module.exports = {
    requestHtml
};