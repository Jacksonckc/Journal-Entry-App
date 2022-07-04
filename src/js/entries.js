import { loadLogo, loadNavbar, callAPI, addHideNavListener } from './helper'

loadLogo()
loadNavbar('entriesPage').then(() => addHideNavListener())

async function populateEntriesContent() {
  const content = await callAPI('entries')
  // console.log(content)
  content.reverse()

  let count = 1
  content.forEach((item) => {
    const entriesContent = document.querySelector('.entriesContent')
    // const entryNum = document.createElement('div')
    // entryNum.setAttribute('class', 'entryNum')
    // entryNum.innerHTML = count
    // count++
    // entriesContent.appendChild(entryNum)
    // item.media_ids.forEach((id) => {
    //   console.log(id)
    //   callAPI('media/' + id).then((photo) => {
    //     console.log(photo)
    //   })
    // })

    const entryText = document.createElement('div')
    entryText.setAttribute('class', 'entryText')
    entryText.innerHTML = item.entry
    entriesContent.appendChild(entryText)
  })
}
populateEntriesContent()

function createEntry() {}
