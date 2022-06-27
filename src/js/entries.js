import { loadLogo, callAPI } from './helper'

async function populateContent() {
  const content = await callAPI()
  console.log(content)
  document.querySelector('.entriesContent').innerHTML = content.entries.topic
}


populateContent()

loadLogo()

function createEntry() {}
