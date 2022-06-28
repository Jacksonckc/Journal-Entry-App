import { loadLogo, loadNavbar, callAPI } from './helper'

loadLogo()
loadNavbar('entriesPage')

async function populateEntriesContent() {
  const content = await callAPI()
  console.log(content)
  document.querySelector('.entriesContent').innerHTML = content.entries.topic
}
populateEntriesContent()

function createEntry() {}
