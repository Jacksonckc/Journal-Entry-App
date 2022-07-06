import { loadLogo, loadNavbar, callAPI, addHideNavListener } from './helper'

loadLogo()
loadNavbar('entriesPage').then(() => addHideNavListener())

async function populateEntriesContent() {
  const content = await callAPI('entries')
  content.reverse()

  content.forEach((item) => {
    const entriesContent = document.querySelector('.entriesContent')

    // each item box
    const entryItem = document.createElement('div')
    entryItem.setAttribute('class', 'entryItem clickToOpen')
    entryItem.setAttribute('tabindex', 0)
    entryItem.addEventListener('click', (e) => {
      e.currentTarget.classList.add('displayOverlay')
    })
    entryItem.addEventListener('blur', (e) => {
      e.currentTarget.classList.remove('displayOverlay')
    })

    // each item's entry text
    const entryText = document.createElement('div')
    entryText.setAttribute('class', 'entryText')
    entryText.innerHTML = item.entry
    entryItem.appendChild(entryText)

    // delete button
    const entryDeleteButton = document.createElement('button')
    entryDeleteButton.innerHTML = 'Delete'
    entryDeleteButton.addEventListener('click', () => {
      console.log('hi')
    })
    entryItem.appendChild(entryDeleteButton)

    entriesContent.appendChild(entryItem)
  })
}

populateEntriesContent()
