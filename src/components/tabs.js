import axios from "axios";
import { response } from "msw";

const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
  const topicsDiv = document.createElement('div');
  topicsDiv.classList.add('topics');
  // topics.forEach(i => {
  //   const tabDiv = document.createElement('div')
  //   tabDiv.classList.add('tab')
  //   tabDiv.textContent = [i]
  //   topicsDiv.appendChild(tabDiv)
  // })
  // console.log(topicsDiv)
  // return topicsDiv
  topics.forEach(topic => {
    const tabDiv = document.createElement('div')
    tabDiv.classList.add('tab')
    tabDiv.textContent = topic
    topicsDiv.appendChild(tabDiv)
  })

  console.log(topicsDiv)
  return topicsDiv





  // const topicTabs = topics.forEach(topic => {
  //   document.createElement('div').textContent = topic
  //   return topicTabs
  // })

  // topics.forEach(topic => {
  //   const topicItem = document.createElement('div')
  //   topicItem.textContent = topic
  //   topicsDiv.appendChild(topicItem)
  // })

  // axios.get('http://localhost:5000/api/topics')
  //   .then(res => {
  //     console.log(res.data)
  //     for (let i = 0; i < res.data.length; i++) {
  //       topics[i] = res.data[i]
  //       return topics
  //     }
  //   })
  //   .catch(err => {
  //     console.error(err);
  //   })
  //   .finally(() => {
  //     console.log('get resquest')
  //   })
}

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it in Postman/HTTPie!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //

  axios.get('http://localhost:5000/api/topics')
    .then(res => {
      let topics = []
      // topics.push(res.data.topics)
      res.data.topics.forEach(topic => {
        topics.push(topic)
      })
      console.log(res.data.topics)
      console.log(topics)
      const tabsElement = Tabs(topics)
      console.log(tabsElement)
      document.querySelector(selector).appendChild(tabsElement)
    })
    .catch(err => {
      console.error(err)
    })
    .finally(() => [
      console.log('get request')
    ])
  const topics = []
  console.log(topics)

  // const tabsElement = Tabs(topics)
  // console.log(tabsElement)
  // document.querySelector(selector).appendChild(tabsElement)
}

export { Tabs, tabsAppender }
