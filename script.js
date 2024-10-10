const url = "https://gomezmig03.github.io/MotivationalAPI/en.json";

async function fetchMessages() {
    const response = await fetch(url);
    const json = await response.json();

    const element = document.querySelector(".container");
    element.innerHTML = ""; 

    for (const item of json) {
        const phrase = item.phrase;
        const author = item.author;

    element.innerHTML += "<t>" + phrase + "</t>" + "<a>" + author + "</a>" + "<br />";
  }
  
}

fetchMessages()