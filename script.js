const endpoint = "https://api.whatdoestrumpthink.com/api/v1/quotes/random";

const newQuote = document.getElementById("new-quote");
const spinner = document.getElementById("spinner");

async function handleClick() {
  try {
    newQuote.disabled = true;
    spinner.classList.remove("hidden");
    const json = await (await fetch(endpoint)).json();
    displayQuote(json.message);
    setTweetButton(json.message);
  } catch {
  } finally {
    newQuote.disabled = false;
    spinner.classList.add("hidden");
  }
}

handleClick();

newQuote.addEventListener("click", handleClick);

function displayQuote(quote) {
  const quoteMessage = document.getElementById("quote-message");
  quoteMessage.textContent = quote;
}

function setTweetButton(quote) {
  const tweetLink = document.getElementById("tweet");
  tweetLink.setAttribute(
    "href",
    `https://twitter.com/share?text=${quote} - Donald Trump`
  );
}
