import { loadLogo, loadNavbar, callAPI, addHideNavListener } from './helper.js'

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
  const token = callAPI(endpoint, options)
  console.log(token)
}

function setEntry() {
  // Add an event listener to the submit button of the entry form.
  // When it is clicked, grab the values of each input and call the
  // addEntry function to add them in the options.
  document.querySelector('#addEntry').addEventListener('click', () => {
    const entryName = document.querySelector('#entryName').value
    const entry = document.querySelector('#entry').value
    addEntry({ entryName, entry })
  })
}

// Call the setEntry function
setEntry()
