const baseUrl = 'https://online-journey.herokuapp.com/'

function convertToText(res) {
  if (res.ok) {
    return res.text()
  } else {
    throw new Error('Bad Response')
  }
}

function convertToJson(res) {
  const response = res.json()
  if (response) {
    return response
  } else {
    throw { name: 'servicesError', message: response }
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
  const logo = await loadTemplate('../partials/logo.html')
  const logoElement = document.getElementById('logo')
  renderWithTemplate(logo, logoElement)
}

export async function loadNavbar(currentPage) {
  const navbar = await loadTemplate('partials/navbar.html')
  const navbarElement = document.getElementById('navbar')
  renderWithTemplate(navbar, navbarElement)
  const element = document.getElementById(currentPage)
  if (element) {
    element.style.pointerEvents = 'none'
    element.querySelector('div').style.color = 'black'
  }
}

export async function callAPI(endpoint = '', options = '') {
  return fetch(baseUrl + endpoint)
    .then(convertToJson)
    .then((data) => {
      console.log(data)
      return data
    }, options)
}

export function addHideNavListener() {
  const navbar = document.getElementById('navbar')
  const main = document.querySelector('main')
  let hamburgerMenu = navbar.querySelector('button')

  navbar.addEventListener('click', () => {
    navbar.classList.toggle('toggleNavbarStyle')
    main.classList.toggle('toggleMainStyle')
    hamburgerMenu.classList.toggle('toggleButtonStyle')
    if (hamburgerMenu.innerHTML == '←') {
      hamburgerMenu.innerHTML = '→'
      console.log(hamburgerMenu.innerHTML)
      console.log('here')
    } else {
      hamburgerMenu.innerHTML = '←'
    }
  })
}
