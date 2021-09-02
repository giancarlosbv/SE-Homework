

//Clean up these comments!
//we're almost there
//you got this
function animeList(value) {//make another function called mangaList
    fetch("https://api.jikan.moe/v3/top/anime")
        .then((response) => response.json())
        // .then(data => console.log(data))
        .then((data) => displayAnime(data))
        .catch((error) => console.log(error))
    return "done"


}

function mangaList(value) {//make another function called mangaList
    fetch("https://api.jikan.moe/v3/top/manga")
        .then((response) => response.json())
        // .then(data => console.log(data))
        .then((data) => displayManga(data))
        .catch((error) => console.log(error))
    return "done"


}

function displayManga(data) {
    let list = document.querySelector("#manga")
    list.innerHTML = ""
    console.log(data.top.length)
    for (let i = 0; i < data.top.length; i++) {
        let title = data.top[i].title
        let url = data.top[i].url
        let image = data.top[i].image_url
        let score = data.top[i].score
        let type = data.top[i].type
        let volumes = data.top[i].volumes
        let start_date = data.top[i].start_date
        let end_date = data.top[i].end_date
        list.innerHTML += `<li class = "list-item"> ${title}</li> <img class = image src = "${image}" alt = "${title}">
        <br>
        <button onclick ="document.getElementById('mangatext${i}').style.display = 'inline'"    id = "more${i}" class = readMore>read more</button>
        <button id = "less${i}" class = readLess>read less</button>
        <ul id = "mangatext${i}" class = moreText><li><a href = "${url}">MyAnimeList Link</a></li>
        <li>Score: ${score}</li>
        <li>Type: ${type}</li>
        <li>volumes: ${volumes}</li>
        <li>Start Date: ${start_date}</li>
        <li>End Date: ${end_date}</li>
        </ul><br><br><br>`;

    }
    


}

function displayAnime(data) {
    let list = document.querySelector("#anime")
    list.innerHTML = ""
    console.log(data.top.length)
    for (let i = 0; i < data.top.length; i++) {
        let title = data.top[i].title
        let url = data.top[i].url
        let image = data.top[i].image_url
        let score = data.top[i].score
        let type = data.top[i].type
        let episodes = data.top[i].episodes
        let start_date = data.top[i].start_date
        let end_date = data.top[i].end_date
        list.innerHTML += `<li class = "list-item"> ${title}</li> <img class = image src = "${image}" alt = "${title}">
        <br>
        <button onclick ="document.getElementById('text${i}').style.display = 'inline'"    id = "more${i}" class = readMore>read more</button>
        <button id = "less${i}" class = readLess>read less</button>
        <ul id = "text${i}" class = moreText><li><a href = "${url}">MyAnimeList Link</a></li>
        <li>Score: ${score}</li>
        <li>Type: ${type}</li>
        <li>Episodes: ${episodes}</li>
        <li>Start Date: ${start_date}</li>
        <li>End Date: ${end_date}</li>
        </ul><br><br><br>`;

    }
    


}

function displayAlert() {
    alert("hello")
}
//nest this function insdie of displayAnime,, then repeat for manga
function displayDetails() {

}


// function changeToComplaints(data) {
//     let list = document.getElementById('complaints')
//     list.innerHTML = ''
//     for (i = 0; i < data.length; i++) {
//         list.innerHTML += '<li>' + data[i].descriptor + `<button class="police-response-btn"onmouseover="document.getElementById('complaint-${i}').innerHTML = '${data[i].resolution_description}'" onmouseout="document.getElementById('complaint-${i}').innerHTML = ''">toggle police response</button></li>` + `<p id="complaint-${i}"></p>`
//     }
// }
// function displayData(d) {
//     console.log(d)   
// }

console.log(animeList())
console.log(mangaList())

    //important key value pairs top.url, .image_url, .score .title, type, episodes, start_date, end_date
//binary search in javascript 
//algorithms
//fibonacci series

        // console.log(list.innerHTML)

        // let hiddenText = `<li><a href = "${url}">MyAnimeList Link</a></li>
        // <li>Score: ${score}</li>
        // <li>Type: ${type}</li>
        // <li>Episodes: ${episodes}</li>
        // <li>Start Date: ${start_date}</li>
        // <li>End Date: ${end_date}</li>`
        // let readMore = document.getElementById(`#readMore${i}`)
        // let moreText = document.getElementById(`#moreText${i}`)
        // let readLess = document.getElementById(`#readLess${i}`)
        // document.addEventListener('click', function (event) {
    
        //     if (event.target.matches(`#readMore${i}`)) {
        //         moreText.style.display = "inline"
        //         readMore.style.display = "none"
        //         readLess.style.display = "inline"
        //     }
    
        //     if (event.target.matches(`.readLess${i}`)) {
        //         moreText.style.display = "none"
        //         readMore.style.display = "inline"
        //         readLess.style.display = "none"
        //     }
    
        // }, false);
        // function togglebutton(){



        //     let readMore = document.querySelector(`.readMore${i}`)
        //     let moreText = document.querySelector(`.moreText${i}`)
        //     let readLess = document.querySelector(`.readLess${i}`)

        //     if (readLess.style.display ==="none"){
        //             moreText.style.display = "inline"
        //             readMore.style.display = "none"
        //             readLess.style.display = "inline"
        //     } else {
        //         
        //     }}

        // readLess.addEventListener('click', ()=>{

        // })
        // console.log(i)