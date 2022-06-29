import { loadLogo, loadNavbar, callAPI } from './helper.js'

loadLogo()
loadNavbar('homePage')

async function fetchLastEntry() {
  const element = document.getElementById('recent-entry')
  const response = await callAPI('entries')
  const recentEntry = response[response.length - 1].entry
  element.innerHTML = 'Your last entry: ' + recentEntry
}
fetchLastEntry()
