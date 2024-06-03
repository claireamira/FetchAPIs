const apiKey = 'pub_4541267d9a991aecae8cca3e19a8280e036d0';
const apiUrl = `https://newsdata.io/api/1/latest?apikey=${apiKey}&language=en`;

{
    async function fetchnews(){
        const response = await fetch(apiUrl)
        const data= await response.json()
        return data.results
}
async function displayNews(){
    const newsContainer= document.getElementById('container')
    const newslist= await fetchnews()

    if (newslist.length===0){
        newsContainer.innerHTML='<p>No news Found</p>'
        return 
    }
    const newsContent= newsList.map(news =>`
        <div class="news-card">
           <img scr="${news.image_url ||  'https://via.placeholder.com/300'}" alt="News Image"}"
           <div class="news-content">
           <h2>${news.title}</h2>
           <p>${news.description || 'No description available.'}</p>
       </div>
        </div>
   `).join('')
   newsContainer.innerHTML=newsContent
}

displayNews()

}