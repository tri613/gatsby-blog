---
datetime: "2017-11-07 18:23:56"
title: "Some code! #2"
tags: ["hello", "cool", "sleepy"]
published: true
---

Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta ea magnam quis quod voluptatem eos illo est odio maiores illum cumque dignissimos ullam sed, repellat quo sapiente repellendus eius sint.

## Cool section

* item 1
* item 2

```javascript
const p1 = Promise.resolve('p1');
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => reject('rejected p2'), 2000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('p3'), 3000);
});
Promise.all([p1, p2, p3])
  .then(console.log)
  .catch(console.error) // error: 'rejected p2'
```

<!-- more -->

Some secret message here

```javascript
async function greetFromAjaxRequest(name) {
  try {
    const greeting = await request("/hi/from/somewhere"); // request will return a promise
    return `${greeting}, ${name}!`;
  } catch (error) {
     throw Error('Oops, something wrong!');
  }
}
greetFromAjaxRequest("Trina")
  .then(console.log)
  .catch(console.error)
```
