const baseUrl = '../mock.json'

export function convertToJson(res) {
  const response = res.json()
  if (response) {
    return response
  } else {
    throw { name: 'servicesError', message: response }
  }
}

function convertToText(res) {
  if (res.ok) {
    return res.text()
  } else {
    throw new Error('Bad Response')
  }
}

export async function loadTemplate(path) {
  const html = await fetch(path).then(convertToText)
  const template = document.createElement('template')
  template.innerHTML = html
  return template
}

export function renderWithTemplate(template, parent) {
  let clone = template.content.cloneNode(true)
  parent.appendChild(clone)
}

export async function loadLogo() {
  const navbar = await loadTemplate('../partials/logo.html')
  const navbarElement = document.getElementById('logo')
  renderWithTemplate(navbar, navbarElement)
}

export async function callAPI(endpoint = '', options = '') {
  return fetch(baseUrl + endpoint)
    .then(convertToJson)
    .then((data) => {
      // console.log(data)
      return data
    }, options)
}
