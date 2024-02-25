const api = "https://type.fit/api/quotes";
const quotes = document.getElementById("quotes");
const author = document.getElementById("author");
const newQ = document.getElementById("newQ");
const tweet = document.getElementById("tweet");

const newTweet=()=>{
    const postMessage = `https://twitter.com/intent/tweet?text=${quotes.innerText} - ${author.innerText}`;
    window.open(postMessage);
}

const randomQuote = (data)=>{
    const quote = Math.floor(Math.random()*10);
    quotes.innerText = `${data[quote].text}`;
    author.innerText = `${data[quote].author}` ;
};

const getQuote = async()=> {
    try{
        const response =await fetch(api);
        const data = await response.json();
        randomQuote(data);
    }catch(e){
        console.log("error is find",e)
    }
};

newQ.addEventListener("click", getQuote);
tweet.addEventListener("click", newTweet);

getQuote();