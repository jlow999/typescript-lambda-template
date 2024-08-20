# typescript-lambda-template

This project allow you to simulate and debug an AWS Lambda function on your local machine.

## Deploy the sample application

To start the local server:
Select 'Run Script: start" from launch menu

- set function break points if needed
- open web broweser and open DevTools, Console

## Using the Fetch API

```js
fetch("http://localhost:3000/hello", {
  method: "POST",
  body: JSON.stringify({ firstName: "example" }),
})
  .then((res) => {
    return res.json();
  })
  .then((res) => {
    console.log(res);
  });
```
