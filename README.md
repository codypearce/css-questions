# [CSS Questions](http://cssquestions.io/)

[![Netlify Status](https://api.netlify.com/api/v1/badges/bd89e375-2895-4019-b2be-778403541b51/deploy-status)](https://app.netlify.com/sites/pedantic-ritchie-9c08b4/deploys)

A list of 140 CSS questions and answers. Written while reading the MDN CSS docs.

<p style="margin-bottom: 0px !important;">
  <img width="800" src="static/site.png" alt="adf" align="center">
</p>

## LocalStorage State
[use-persisted-state](https://github.com/donavon/use-persisted-state) allows for multi-instance, multi-tab/browser shared and persistent state so you can keep track of the questions you've already answered.

<p style="margin-bottom: 0px !important;">
  <img width="500" src="static/persistedstate.gif" alt="adf" align="center">
</p>

## Examples

Does the proximity elements have any effect on specificity? For example is 'main div' more specific than 'html div'?

What does LVHA mean in CSS?

What does :not(\*) select?

What are the three parameters the clamp() function takes?



## Why

I was frustrated that searching "CSS questions" returned a bunch of "Top 5-20 CSS questions" blog posts with questions that rarely asked actual CSS Questions. I thought a resource with more questions that focused soley on CSS might be useful.


## Development
Site was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) 

1. `git clone git@github.com:codypearce/css-questions.git`
2. `npm i`
3. `npm start`

All questions are stored in `src/questions`

## Contributing

All contributions are welcome including new questions, fixing current questions or design. Many questions were written in a short time period and could use review.
