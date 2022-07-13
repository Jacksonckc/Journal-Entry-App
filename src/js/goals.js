import {
  loadLogo,
  loadNavbar,
  callAPI,
  addHideNavListener,
  setTheme,
  clearSessionStorage
} from './helper'

setTheme()
clearSessionStorage()
loadLogo()
loadNavbar('goalsPage').then(() => addHideNavListener())


async function populateGoalsContent() {
    const content = await callAPI('goals')
    content.reverse()

    content && 
    content.forEach((item) => {
        const goalsContent = document.querySelector('.goalsContent')


        const goalItem = document.createElement('div')
        goalItem.setAttribute('class', 'goalItem clickToOpen')

        goalItem.addEventListener('click', (e) => {

            if (e.target == e.currentTarget || e.target.classList == 'goalText') {
                document.querySelector('.displayOverlay') &&
                    document
                    .querySelector('displayOverlay')
                    .classList.remove('displayOverlay')

                e.currentTarget.classList.add('displayOverlay')

                document.querySelector('displayBtn') &&
                    document.querySelectorAll('displayBtn').forEach((btn) => {
                        btn.classList.remove('displayBtn')
                })

                // add buttons to the overlay
                goalItem.querySelector('.closeBtn').classList.add('displayBtn')
                goalItem.querySelector('.deleteBtn').classList.add('displayBtn')
                goalItem.querySelector('.editBtn').classList.add('displayBtn')
            }
        })
        // --------------------------------------------------

        // create close button

        const closeBtn = document.createElement('button')
        closeBtn.setAttribute('class', 'closeBtn')
        closeBtn.innerHTML = 'X'
        closeBtn.addEventListener('click', () => {
            goalItem.classList.remove('displayOverlay')

            document.querySelectorAll('.displayBtn').forEach((btn) => {
                btn.classList.remove('displayBtn')
            })
        })

        // --------------------------------------------------

        // each item's goal text
        const goalText = document.createElement('div')
        goalText.setAttribute('class', 'goalText')
        goalText.innerHTML = item.name

        // --------------------------------------------------

        // delete button
        const goalDeleteBtn = document.createElement('button')
        goalDeleteBtn.setAttribute('class', 'deleteBtn')
        goalDeleteBtn.innerHTML = 'Delete'
        goalDeleteBtn.addEventListener('click', () => {
            deleteGoal(item._id)
        })
        
        // --------------------------------------------------

        // edit button

        const goalEditBtn = document.createElement('button')
        goalEditBtn.setAttribute('class', 'editBtn')
        goalEditBtn.innerHTML = 'Edit'
        goalEditBtn.addEventListener('click', () => {
            sessionStorage.setItem('isEdit', item._id)
            window.location.replace('./goal.html')
        })


        // --------------------------------------------------

        // append all the sub-items to the item
        goalItem.appendChild(closeBtn)
        goalItem.appendChild(goalText)
        goalItem.appendChild(goalDeleteBtn)
        goalItem.appendChild(goalEditBtn)
        
        // --------------------------------------------------

        // append items to the entry content
        goalsContent.appendChild(goalItem)
    })
}

populateGoalsContent()

async function deleteGoal(id) {
    const options = {
        method: 'DELETE'
    }
    await callAPI('goals/' + id, options)
    window.location.reload()
}