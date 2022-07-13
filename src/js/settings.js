import {
  loadLogo,
  loadNavbar,
  addHideNavListener,
  setTheme,
  clearSessionStorage,
} from './helper'

setTheme()
clearSessionStorage()
loadLogo()
loadNavbar('settingsPage').then(() => addHideNavListener())

const ele = document.getElementById('themes')

function changeTheme() {
  const theme = ele.options[ele.selectedIndex].value
  document.cookie = `theme=${theme}`

  setTheme()
}

ele.addEventListener('change', () => changeTheme())

const logoutBtn = document.getElementById('logoutBtn')
logoutBtn.addEventListener('click', confirmLogout)
function confirmLogout() {
  if (confirm('Are you sure you want to logout?')) {
    window.location.replace('http://localhost:8080/logout.html')
  }
}
