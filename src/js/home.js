import { loadLogo, loadNavbar, callAPI, addHideNavListener } from './helper.js'

loadLogo()
loadNavbar('homePage').then(() => addHideNavListener())

async function fetchLastEntry() {
  const element = document.getElementById('recent-entry')
  const response = await callAPI('entries')
  const recentEntry = response[response.length - 1].entry
  element.innerHTML = 'Your last entry: ' + recentEntry
}

fetchLastEntry()
