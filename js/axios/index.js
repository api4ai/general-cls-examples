// Example of using API4AI general image classification / labelling.

// Use 'demo' mode just to try api4ai for free. Free demo is rate limited.
// For more details visit:
//   https://api4.ai

// Use 'rapidapi' if you want to try api4ai via RapidAPI marketplace.
// For more details visit:
//   https://rapidapi.com/api4ai-api4ai-default/api/general-classification1/details
const MODE = 'demo'

// Your RapidAPI key. Fill this variable with the proper value if you want
// to try api4ai via RapidAPI marketplace.
const RAPIDAPI_KEY = ''

const OPTIONS = {
  demo: {
    url: 'https://demo.api4ai.cloud/general-cls/v1/results',
    headers: { 'A4A-CLIENT-APP-ID': 'sample' }
  },
  rapidapi: {
    url: 'https://general-classification1.p.rapidapi.com/v1/results',
    headers: { 'X-RapidAPI-Key': RAPIDAPI_KEY }
  }
}

document.addEventListener('DOMContentLoaded', function (event) {
  const input = document.getElementById('file')
  const raw = document.getElementById('raw')
  const sectionRaw = document.getElementById('sectionRaw')
  const parsed = document.getElementById('parsed')
  const sectionParsed = document.getElementById('sectionParsed')
  const spinner = document.getElementById('spinner')

  input.addEventListener('change', (event) => {
    const file = event.target.files[0]
    if (!file) {
      return false
    }

    sectionRaw.hidden = true
    sectionParsed.hidden = true
    spinner.hidden = false

    // Preapare request: form.
    const form = new FormData()
    form.append('image', file)

    // Make request.
    // eslint-disable-next-line  no-undef -- axios appended to the html file via cdn.
    axios.post(OPTIONS[MODE].url, form, { headers: OPTIONS[MODE].headers })
      .then(function (response) {
        // Print raw response.
        raw.textContent = JSON.stringify(response.data, undefined, 2)
        sectionRaw.hidden = false
        // Parse response and print top 5 classes.
        const top5 = Object.entries(response.data.results[0].entities[0].classes)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 5)
        parsed.textContent = JSON.stringify(top5, undefined, 2) || 'Not objects recognized to classify.'
        sectionParsed.hidden = false
      })
      .catch(function (error) {
        // Error can be handled here.
        console.error(error)
      })
      .then(function () {
        spinner.hidden = true
      })
  })
})
