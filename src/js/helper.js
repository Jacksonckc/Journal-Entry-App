export function convertToJson(res) {
  const response = res.json();
  if (response) {
    return response;
  } else {
    throw { name: 'servicesError', message: response };
  }
}

function convertToText(res) {
  if (res.ok) {
    return res.text();
  } else {
    throw new Error('Bad Response');
  }
}

export async function loadTemplate(path) {
  const html = await fetch(path).then(convertToText);
  const template = document.createElement('template');
  template.innerHTML = html;
  return template;
}

export function renderWithTemplate(template, parent) {
  let clone = template.content.cloneNode(true);
  parent.appendChild(clone);
}

export async function loadNavbar() {
  const navbar = await loadTemplate('../partials/navbar.html');
  const navbarElement = document.getElementById('navbar');
  renderWithTemplate(navbar, navbarElement);
}
