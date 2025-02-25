import axios from "axios"
import { response } from "msw"

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  // article = { headline, authorPhoto, authorName }
  const cardDiv = document.createElement('div');
  const headlineDiv = document.createElement('div');
  const authorDiv = document.createElement('div');
  const imageContainer = document.createElement('div');
  const imageElement = document.createElement('img');
  const authorNameSpan = document.createElement('span');

  cardDiv.classList.add('card');
  headlineDiv.classList.add('headline');
  authorDiv.classList.add('author');
  imageContainer.classList.add('img-container');
  cardDiv.addEventListener('click', () => { (console.log(`${article.headline}`)) });

  cardDiv.appendChild(headlineDiv);
  cardDiv.appendChild(authorDiv);
  authorDiv.appendChild(imageContainer);
  imageContainer.appendChild(imageElement);
  authorDiv.appendChild(authorNameSpan);

  headlineDiv.textContent = article.headline;
  imageElement.src = article.authorPhoto;
  authorNameSpan.textContent = article.authorName;

  return cardDiv;


}
Card('test')
const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  axios.get('http://localhost:5000/api/articles')
    .then(res => {
      res.data.articles.javascript.forEach(article => {
        document.querySelector(selector).appendChild(Card(article))
      });
      res.data.articles.bootstrap.forEach(article => {
        document.querySelector(selector).appendChild(Card(article))
      });
      res.data.articles.technology.forEach(article => {
        document.querySelector(selector).appendChild(Card(article))
      });
      res.data.articles.jquery.forEach(article => {
        document.querySelector(selector).appendChild(Card(article))
      });
      res.data.articles.node.forEach(article => {
        document.querySelector(selector).appendChild(Card(article))
      });
    })
    .catch(err => {
      console.error(err);
    })
    .finally(() => {
      console.log('get request');
    });
}

export { Card, cardAppender }
