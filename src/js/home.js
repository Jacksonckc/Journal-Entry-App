import {
  loadLogo,
  loadNavbar,
  callAPI,
  addHideNavListener,
  clearSessionStorage,
  setTheme,
} from './helper.js'

setTheme()
clearSessionStorage()
loadLogo()
loadNavbar('homePage').then(() => addHideNavListener())

// const navbarAnimation = navbarAnimation()

async function fetchLastEntry() {
  const element = document.getElementById('recent-entry')
  const response = await callAPI('entries')
  const recentEntry = response[response.length - 1]?.entry
  element.innerHTML = 'Your last entry: ' + recentEntry
}

fetchLastEntry()
