import { loadLogo, loadNavbar, callAPI, addHideNavListener } from './helper'

loadLogo()
loadNavbar('entriesPage').then(() => addHideNavListener())

async function populateEntriesContent() {
  const content = await callAPI('entries')
  // reverse the returned array of entries to put the last entry first
  content.reverse()

  // if there is entry
  content &&
    content.forEach((item) => {
      // this is for all the about to create items to append to
      const entriesContent = document.querySelector('.entriesContent')

      // --------------------------------------------------

      // each item box
      const entryItem = document.createElement('div')
      entryItem.setAttribute('class', 'entryItem clickToOpen')

      entryItem.addEventListener('click', (e) => {
        if (e.target == e.currentTarget) {
          // if there already has an overlay open, remove that overlay class
          document.querySelector('.displayOverlay') &&
            document
              .querySelector('.displayOverlay')
              .classList.remove('displayOverlay')

          // add overlay class to the clicked target
          e.currentTarget.classList.add('displayOverlay')

          // check to see if there is button being displayed already
          document.querySelector('.displayBtn') &&
            document.querySelectorAll('.displayBtn').forEach((btn) => {
              btn.classList.remove('displayBtn')
            })

          // add buttons to the overlay
          entryItem.querySelector('.closeBtn').classList.add('displayBtn')
          entryItem.querySelector('.deleteBtn').classList.add('displayBtn')
          entryItem.querySelector('.editBtn').classList.add('displayBtn')
        }
      })

      // --------------------------------------------------

      // create close button
      const closeBtn = document.createElement('button')
      closeBtn.setAttribute('class', 'closeBtn')
      closeBtn.innerHTML = 'X'
      // when clicked remove the displayOverlay and the display button class
      closeBtn.addEventListener('click', () => {
        entryItem.classList.remove('displayOverlay')
        // also remove the buttons
        document.querySelectorAll('.displayBtn').forEach((btn) => {
          btn.classList.remove('displayBtn')
        })
      })

      // --------------------------------------------------

      // each item's entry text
      const entryText = document.createElement('div')
      entryText.setAttribute('class', 'entryText')
      entryText.innerHTML = item.entry

      // --------------------------------------------------

      // delete button
      const entryDeleteBtn = document.createElement('button')
      entryDeleteBtn.setAttribute('class', 'deleteBtn')
      entryDeleteBtn.innerHTML = 'Delete'
      entryDeleteBtn.addEventListener('click', () => {
        deleteEntry(item._id)
      })

      // --------------------------------------------------

      // edit button
      const entryEditBtn = document.createElement('button')
      entryEditBtn.setAttribute('class', 'editBtn')
      entryEditBtn.innerHTML = 'Edit'
      entryEditBtn.addEventListener('click', () => {
        // window.location.replace('./entry.html')
      })

      // --------------------------------------------------

      // append all the sub-items to the item
      entryItem.appendChild(closeBtn)
      entryItem.appendChild(entryText)
      entryItem.appendChild(entryDeleteBtn)
      entryItem.appendChild(entryEditBtn)

      // --------------------------------------------------

      // append items to the entry content
      entriesContent.appendChild(entryItem)
    })
}

populateEntriesContent()

// delete entry
async function deleteEntry(id) {
  const options = {
    method: 'DELETE',
  }

  await callAPI('entries/' + id, options)
  window.location.reload()
}

// edit entry
// async function editEntry(id) {
//   const options = {
//     method: 'PUT',
//   }

//   await callAPI('entries/' + id, options)
//   window.location.reload()
// }
