import { convertToJson, loadNavbar } from './helper.js';

async function getResponse(url) {
  return await fetch(url)
    .then(convertToJson)
    .then((data) => console.log(data));
}

getResponse('../mock.json');
loadNavbar();
