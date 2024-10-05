const API_KEY = 'H0cNpRveYUQMkDxSYqHJUwoyKioe3B8H';
const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q`

async function fetchData(query) {
    const res = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=${API_KEY}`)
    const data = await res.json()
    return data.response.docs;

}
fetchData("election").then(data => {
    console.log(data);
    renderMain(data); 
});

let mobilemenu = document.querySelector(".mobile")
let menubtn = document.querySelector(".menubtn")
let menubtndisplay = true;

menubtn.addEventListener("click",()=>{
    mobilemenu.classList.toggle("hidden")
})

function renderMain(ar){
    let mainHTML = ''
    for(let i = 0 ; i < ar.length ;i++){
        mainHTML += ` <div class="card">
                        <a href=${ar[i].uri}>
                        <img src=${ar[i].multimedia[0].url} lazy="loading" />
                        <h4>${ar[i].headline.main}</h4>
                        <div class="pub_date">
                            <p>${ar[i].byline.original}</p>
                            <span>•</span>
                            <p>${new Date(ar[i].pub_date).toLocaleDateString()}</p>
                        </div>
                        <div class="description">
                           ${ar[i].abstract}
                        </div>
                        </a>
                     </div>
        `
    }
    document.querySelector("main").innerHTML = mainHTML
}

