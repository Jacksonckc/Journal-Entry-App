import {
  loadLogo,
  loadNavbar,
  callAPI,
  addHideNavListener,
  setTheme,
} from './helper.js'
setTheme()
loadLogo()
loadNavbar().then(() => addHideNavListener())

const endpoint = 'entries/'

function addEntry(formData) {
  // set options for POST method
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  }

  // use callAPI function to make an API call with entries endpont and options
  callAPI(endpoint, options)
}

function setEntry() {
  // Add an event listener to the submit button of the entry form.
  // When it is clicked, grab the values of each input and call the
  // addEntry function to add them in the options.
  document.querySelector('#addEntry').addEventListener('click', () => {
    const entryText = document.querySelector('#entry').value
    addEntry({ entry: entryText })
  })
}
// Call the setEntry function

async function loadEntry(id) {
  const entry = await callAPI(endpoint + id)

  const entryForm = document.querySelector('#entry')
  entryForm.innerHTML = entry.entry

  const editButton = document.querySelector('#addEntry')
  editButton.innerHTML = 'Edit Entry'
}

function editEntry(id) {
  loadEntry(id)

  // modify click event
  document.querySelector('#addEntry').addEventListener('click', () => {
    const entryText = document.querySelector('#entry').value

    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ entry: entryText }),
    }
    callAPI(endpoint + id, options)
  })
}

const isEdit = sessionStorage.getItem('isEdit')

isEdit ? editEntry(isEdit) : setEntry()
