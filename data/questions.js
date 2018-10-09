const questions = [
  {
    id: 1,
    question:
      "Does the proximity of an element to another element have any effect on levels of specificity?",
    answer: "No  using body div and html div have the same specificity",
    position: 1,
    tags: ["cascade"]
  },
  {
    id: 2,
    question: "Do inherited styles ever overrule directly selected rules?",
    answer:
      "No, regardless of the selector’s specificity it will overrule the inherit rule",
    position: 2,
    tags: ["cascade"]
  },

  {
    id: 3,
    question:
      "What are the common numeric values given to for each level of specificity. ",
    answer: `Inline styles = 1000
    Id = 100
    Class,attribute, pseudo selector = 10
    Element and pseudo element = 1
    Universal, combinators, and :not() = 0`,
    position: 3,
    tags: ["cascade"]
  },

  {
    id: 4,
    question:
      "Does ::after create an element before the element’s other children?",
    answer:
      "No it creates it after all children in the element including :before and actual elements",
    position: 4,
    tags: ["pseudo elements"]
  }
];

module.exports = questions;
