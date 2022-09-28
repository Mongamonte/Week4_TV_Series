import "./styles.css";

document.getElementById("form").addEventListener("submit", parseURL);

async function parseURL(event) {
  event.preventDefault();
  var page = "https://api.tvmaze.com/search/shows?q=";
  var query = document.getElementById("input-show").value;
  var url1 = page.concat(query);
  console.log(query);
  console.log(url1);
  const dataPromise = await fetch(url1);
  const dataJSON = await dataPromise.json();

  var objectAmount = dataJSON.length;
  console.log(objectAmount);

  for (let i = 0; i < objectAmount; i++) {
    /*console.log(dataJSON[i]);
    console.log(dataJSON[i].show.name);
    console.log(dataJSON[i].show.summary);*/

    const newDiv = document.createElement("div"); //luodaan luokka
    newDiv.setAttribute("class", "show-data"); //annetaan luokalle nimi
    document.getElementById("body").appendChild(newDiv); //lisätään bodyyn

    const NewImage = document.createElement("img"); //luodaan uusi kuva
    NewImage.setAttribute("class", "img");
    NewImage.setAttribute("alt", "Image not found");
    if (
      dataJSON[i].show.image.medium === null ||
      dataJSON[i].show.image.medium === undefined ||
      dataJSON[i].show.image.medium === ""
    ) {
    } else {
      NewImage.src = dataJSON[i].show.image.medium;
      newDiv.appendChild(NewImage);
    }

    const newDiv2 = document.createElement("div"); //luodaan luokka
    newDiv2.setAttribute("class", "show-info"); //annetaan luokalle nimi
    newDiv.appendChild(newDiv2);

    const newH1 = document.createElement("h1");
    newH1.setAttribute("class", "header-one");
    newH1.innerHTML = dataJSON[i].show.name;
    newDiv2.appendChild(newH1);

    const newText = document.createElement("p");
    newText.setAttribute("class", "p");
    newText.innerHTML = dataJSON[i].show.summary;
    newDiv2.appendChild(newText);
  }
}

/*
 const NewImage = document.createElement("img"); //luodaan uusi kuva
    NewImage.setAttribute("class", "img");
    NewImage.setAttribute("alt", "Image not found");
    NewImage.src = dataJSON[i].show.image;
    newDiv.appendChild(NewImage); 
  */
