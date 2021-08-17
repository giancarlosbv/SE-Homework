//search through 311 call data from NYC API, display all complaints made to the NYPD, filtered by borough.
//how did the police respond to the complaint
//we want borough, descriptor(what kind of complaint), agency: NYPD, and resolution_description

//311 call API: https://data.cityofnewyork.us/resource/erm2-nwe9.json\
//MVP
// Users should be able to see five buttons for the five boroughs (manhattan, brooklyn, queens, staten island, bronx) of New York City when they load the page
// Users should also be able to see an input box where they can put in a number of how many complaints they want to see
// When the user clicks on one of the five buttons, a list of complaints should be displayed on the page, according to the number they input AND the borough they clicked on
// If the user doesn't input any number, make the default be 10
// Remember, also, they only want complaints that were handled by the NYPD! (hint: consider filtering for a specific "agency" when making the API call)
// When the list of complaints is shown, each complaint should also have a button on it that reads something along the lines of "toggle police response"
// When the user clicks on on the "toggle police response" button, it should then toggle how the police responded to that particular complaint
// Make sure it only toggles the response for that one complaint, not the entire list!
// const fetch = require('node-fetch')
const list = document.querySelector('.list');
let buttons = document.querySelectorAll('.btn');
let input = document.querySelector('#search');

buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    let inputValue = input.value;
    let buttonValue = btn.value;
    if (!inputValue) {
      // Setting 10 to default if no input
      inputValue = 10;
    }
    nypdComplaints(inputValue, buttonValue);
  });
});

function nypdComplaints(value, city) {
  list.innerHTML = '';
  fetch('https://data.cityofnewyork.us/resource/erm2-nwe9.json')
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      data
        // Takes only NYPD complaints
        .filter((filterByAgency) => filterByAgency.agency === 'NYPD')
        .filter((filterByCity) => filterByCity.borough === city)
        .forEach((data, i) => {
          if (value > i) { 
            list.insertAdjacentHTML(
              'afterbegin',
              `<div class="descriptor-container">
                    <li class="item">${data.descriptor}</li>
                    <button class="response">What did the police do</button>
                </div>
                <div class="response-container">
                    <p class="resolution-Text">${
                      data.resolution_description
                        ? data.resolution_description
                        : 'Complaint not resolved yet'
                    }</p>
                </div>
                `
            );

            let nypdResponse = document.querySelector('.response'); //this is what displays police response, removing css display none rule then adding it back on timeout
            let response = document.querySelector('.response-container');
            nypdResponse.addEventListener('click', () => {
              response.classList.remove('response-container');
            });

            nypdResponse.addEventListener('mouseout', () => {
              setTimeout(() => {
                response.classList.add('response-container');
              }, 500);
            });
          }
        });
    });
}


// policeComplaints(5, "bronx")




// function displayData(d) {
//     console.log(d.length)
//     console.log(d[0])
//     console.log(d[0].resolution_description)
// }


// console.log(d.length)

// console.log(data.agency('NYPD'))