import { loadLogo, loadNavbar, callAPI, addHideNavListener } from './helper.js'

loadLogo()
loadNavbar().then(() => addHideNavListener())

const endpoint = 'goals/'

// POST method
function addGoal(formData) {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name: formData})
    }

    // call the CallAPI
    callAPI(endpoint, options)
}

// Add an event listener to the add Goal button
function setGoal() {
    document.querySelector('#addGoal').addEventListener('click', () => {
        const goalText = document.querySelector('#goal').value
        addGoal({goal: goalText})
    })
}

async function loadGoal(id) {
    const goal = await callAPI(endpoint + id)

    const goalForm = document.querySelector('#goal')
    goalForm.innerHtml = goal.name
    
    const editButton = document.querySelector('#addGoal')
    editButton.innerHTML = 'Edit Goal'
}

function editGoal(id) {
    loadGoal(id)

    // modify click event
    document.querySelector("#addGoal").addEventListener('click', ()=>{
        const goal = document.querySelector('#goal').value
        
        const options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({name: goal})
        }
        callAPI(endpoint + id, options)
    })
}

// grab the id from session storage
const isEdit = session.Storage.getItem('isEdit')

isEdit ? editGoal(isEdit) : setGoal()
