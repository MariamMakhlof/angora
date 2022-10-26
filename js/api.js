var links = document.querySelectorAll('.nav-link');
console.log(links);
getNews('general');

for (var i = 0; i < links.length; i++) {
  links[i].addEventListener('click',function (e) {  
    //console.log(e.target.innerText);
    var linksCategory = e.target.innerText;
    console.log('mmm');
    getNews(linksCategory);
  })
}

var news=[];

function getNews(linksCategory)
{
    var myHttp = new XMLHttpRequest();
    myHttp.open('GEt',`
    https://newsapi.org/v2/top-headlines?country=us&category=${linksCategory}&apiKey=90a48fc8d3e149edb3c05bd366c930c0`);

    myHttp.send()
    myHttp.addEventListener('readystatechange',function () {
        if (myHttp.readyState==4 && myHttp.status == 200) {
            news = JSON.parse(myHttp.response).articles;
            displayData();
        }
      })
}

function displayData()
{
    var temp = ``;
    for (var i = 0; i < news.length; i++) {
        temp += `<div class="col-md-3">
        <img src="${news[i].urlToImage==null? 'x-symbol_318-1407.webp' : `${news[i].urlToImage}`}" alt="" class="w-100">
        <h4>${news[i].title==null? 'SooooN': `${news[i].title}`}</h4>
        <p>${news[i].description==null? 'SoooN' : `${news[i].description}`}</p>
    </div>`
    }
    document.getElementById('myNews').innerHTML=temp;
}