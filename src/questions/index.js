const questions = [
  {
    id: 1,
    question:
      "Does the proximity of elements have any effect on specificity? For example is 'main div' more specific than 'html div'?",
    answer:
      "No, elements that are closer together do not have more specificity than elements that are farther away in the DOM. 'main div' and 'html div' have the same specificity, therefore 'html div' would override 'main div' if declared later.",
    position: 1,
    tags: ["specificity"]
  },
  {
    id: 2,
    question: "What does LVHA mean in CSS?",
    answer:
      "LVHA is the order of link-related pseudo-classes precedence, :link, :visited, :hover, and :active. For selectors that have equal specificity, some rules will be overridden unless you follow the LVHA order.",
    position: 2,
    tags: ["specificity"]
  },
  {
    id: 3,
    question:
      "If I create a rule for :active and then another rule for :visited which will be applied?",
    answer:
      ":active wil be overridden by any of the LVHA unless it it comes after :visited according to LVHA.",
    position: 3,
    tags: ["specificity"]
  },

  {
    id: 4,
    question: "What does the isolation property do?",
    answer: "It creates a new stacking context for the element.",
    position: 4,
    tags: ["stacking"]
  },

  {
    id: 5,
    question:
      "What happens when you add a calc() function inside a calc() function?",
    answer: "The inner calc() function is treated as parentheses.",
    position: 5,
    tags: ["functions"]
  },
  {
    id: 6,
    question: "Can you add ::before or ::after to an <img> element?",
    answer:
      "<img>s are replaced elements and the CSS Spec does not require or define how psuedo-elements work for replaced elements. Support is left up to browser implementations.",
    position: 6,
    tags: ["pseudo elements", "replaced elements"]
  },
  {
    id: 7,
    question: "In CSS what is the default ratio of pixels to inches?",
    answer: "1:96",
    position: 7,
    tags: ["value types"]
  },
  {
    id: 8,
    question:
      "Does ::after create an element before or after the element’s other children?",
    answer:
      "::after occurs after all children in the element including :before and actual elements.",
    position: 8,
    tags: ["pseudo elements"]
  },
  {
    id: 9,
    question: "What does align-content do when flex-wrap: nowrap?",
    answer:
      "Nothing, align-content only applies when there is more than one row/column. It does not apply when the flexible container is on one line.",
    position: 9,
    tags: ["flex"]
  },

  {
    id: 10,
    question: "What are the possible values for border-style?",
    answer:
      "none | hidden | dotted | dashed | solid | double | groove | ridge | inset | outset",
    position: 10,
    tags: ["property values"]
  },

  {
    id: 11,
    question: "What is the initial value for font-size?",
    answer: "medium",
    position: 11,
    tags: ["property values"]
  },
  {
    id: 12,
    question:
      "What happens to the vertical margin on a non-floated element when clear: both is applied?",
    answer:
      "The vertical margins are collapsed and the element is moved below the  edge of the associated floated elements, ignoring its own margin.",
    position: 12,
    tags: ["float"]
  },
  {
    id: 13,
    question:
      "When the line-height property has a number value without a unit, what does the number mean?",
    answer: "The number provided multiplied by the font-size.",
    position: 13,
    tags: ["line height"]
  },
  {
    id: 14,
    question:
      "Does background-blend-mode apply to elements that have only one background-image?",
    answer:
      "No unless they have background-color, then the image will blend with the color.",
    position: 14,
    tags: ["background"]
  },
  {
    id: 15,
    question:
      "When animation-direction: reverse is applied, the end state and start state flipps. What else changes?",
    answer:
      "The Animation timing function will flip, it will go from ease-in to ease-out for example",
    position: 15,
    tags: ["animation"]
  },
  {
    id: 16,
    question:
      "When border-collapse is set to 'separated', what determines the distance between cells?",
    answer: "border-spacing",
    position: 16,
    tags: ["border"]
  },

  {
    id: 17,
    question: "Name one difference between borders and outlines?",
    answer:
      "Outlines do not take up any space in the flow of the document, while borders necessarily do.",
    position: 17,
    tags: ["border"]
  },
  {
    id: 18,
    question:
      "What is the content box size when you change box-sizing to 'border-box' and have '5px border'?",
    answer:
      "It gets reduced by 5px on all sides, but the height and width now indicate the full size of the object.",
    position: 18,
    tags: ["box model"]
  },
  {
    id: 19,
    question:
      "What is the effect of bottom, top, left, right, when the position is set to static?",
    answer:
      "Nothing they has no effect on static elements only positioned elements.",
    position: 19,
    tags: ["position"]
  },
  {
    id: 20,
    question:
      "What is the effect of bottom when the position is set to absolute or fixed?",
    answer:
      "When position is set to absolute or fixed, the bottom property specifies the distance between the element's bottom edge and the bottom edge of its containing block.",
    position: 20,
    tags: ["position"]
  },
  {
    id: 21,
    question:
      "What is the effect of bottom when the position is set to relative?",
    answer:
      "When position is set to relative, the bottom property specifies the distance the element's bottom edge is moved above its normal position.",
    position: 21,
    tags: ["position"]
  },
  {
    id: 22,
    question:
      "What is the effect of bottom  when the position is set to sticky?",
    answer:
      "When position is set to sticky, the bottom property behaves like its position is relative when the element is inside the viewport, and like its position is fixed when it is outside the viewport.",
    position: 22,
    tags: ["position"]
  },
  {
    id: 23,
    question:
      "'All' resets all properties on an element except what two properties?",
    answer: "unicode-bidi and direction",
    position: 23,
    tags: ["other"]
  },
  {
    id: 24,
    question: "How can you display a page’s title with just css?",
    answer:
      "If you put display: block on both the <head> and <title> elements they will show within in the document.",
    position: 24,
    tags: ["elements"]
  },
  {
    id: 25,
    question:
      "If you have two selectors with equal specificity which one’s rules are applied?",
    answer: "Whichever selector is declared later.",
    position: 25,
    tags: ["specificity"]
  },
  {
    id: 26,
    question: "What position is required for z-index to take effect?",
    answer:
      "Relative, Absolute, Fixed, Sticky but not static. If it has position: static, z-index will not have an effect.",
    position: 26,
    tags: ["stacking"]
  },

  {
    id: 27,
    question:
      "What are the common numeric values given for each level of specificity. ",
    answer: `Inline styles = 1000
      Id = 100
      Class,attribute, pseudo selector = 10
      Element and pseudo element = 1
      Universal, combinators, and :not() = 0`,
    position: 27,
    tags: ["specificity"]
  },
  {
    id: 28,
    question: "Do inherited styles ever overrule directly selected rules?",
    answer:
      "No, regardless of the selector’s specificity it will overrule the inherit rule.",
    position: 28,
    tags: ["inheritance"]
  },
  {
    id: 29,
    question: "What is the default position of all elements?",
    answer: "Static",
    position: 29,
    tags: ["defaults"]
  },

  {
    id: 30,
    question: "What are the possible keyword values for border-width?",
    answer: "thin | medium | thick | inherit | initial",
    position: 30,
    tags: ["property values"]
  },

  {
    id: 31,
    question: "What are the 4 value types for angles in CSS?",
    answer: "Radians, Gradians, Turns, Degrees",
    position: 31,
    tags: ["value types"]
  },
  {
    id: 32,
    question: "What time value comes first in the animation shorthand?",
    answer: "Animation Duration always comes first, animation delay is second.",
    position: 31,
    tags: ["animation"]
  },
  {
    id: 33,
    question:
      "What does block-size determine when writing-mode is set to vertical?",
    answer: "The width of the block",
    position: 33,
    tags: ["block size"]
  },
  {
    id: 34,
    question: "How can you gain access to attribute values in CSS?",
    answer: "the attr() function",
    position: 34,
    tags: ["functions"]
  },
  {
    id: 35,
    question:
      "What is the difference between 'space' and 'round' for background-repeat property?",
    answer:
      "Space leaves even gaps between the images, round fills the space without gaps.",
    position: 35,
    tags: ["background"]
  },
  {
    id: 36,
    question:
      "What is the difference between 'contain' and 'cover' for background-size?",
    answer:
      "Contain scales the image as much as possible without stretching or cropping the image, cover scales the image as much as possible without stretching the image but it may be cropped",
    position: 36,
    tags: ["background"]
  },

  {
    id: 37,
    question: "What are the keyword values for vertical-align?",
    answer:
      "baseline | sub | super | text-top | text-bottom | middle | top | bottom",
    position: 37,
    tags: ["property values"]
  },

  {
    id: 38,
    question: "What does :out-of-range select?",
    answer: "Any input value that is outside it's min/max attribute values",
    position: 38,
    tags: ["pseudo class"]
  },
  {
    id: 39,
    question: "What is the default value for 'hyphens' property?",
    answer: "manual",
    position: 39,
    tags: ["property values"]
  },
  {
    id: 40,
    question: "What do forwards and backwards do on animation-fill-mode?",
    answer:
      "They both decide the ending state of the animation, for backwards it's the first values in the keyframes given, for forwards its the last",
    position: 40,
    tags: ["animation"]
  },
  {
    id: 41,
    question:
      "If you push a border image outside of it's border-box using Border-image-outset, can it still be hovered?",
    answer: "No, mouse events are not captured outside of border-box",
    position: 41,
    tags: ["border"]
  },

  {
    id: 42,
    question:
      "If you do not specify background-origin in the background shorthand, what happens to the value?",
    answer: "It gets reset to initial value",
    position: 42,
    tags: ["border"]
  },
  {
    id: 43,
    question: "What is the font property short for?",
    answer:
      "font-style, font-variant, font-weight, font-size, line-height, and font-family.",
    position: 43,
    tags: ["font"]
  },
  {
    id: 44,
    question:
      "What happens when the preferred value of the clamp() function is less than the minimum value?",
    answer: "The minimum value will become the default then.",
    position: 44,
    tags: ["functions"]
  },

  {
    id: 45,
    question: "Does the order the values in the border property matter?",
    answer: "No they can be in any order",
    position: 45,
    tags: ["border"]
  },
  {
    id: 46,
    question: "What is the default animation timing function?",
    answer: "ease",
    position: 46,
    tags: ["animation"]
  },
  {
    id: 47,
    question:
      "Flexible elements expand to fill the available space, do they also contract below their content size?",
    answer:
      "No, the only way to do this is set to set min-height or min-width.",
    position: 48,
    tags: ["flex"]
  },
  {
    id: 48,
    question: "What does ex represent in css?",
    answer: "The x height of the font",
    position: 48,
    tags: ["value types"]
  },
  {
    id: 49,
    question: "When are styles not inherited?",
    answer:
      "Styles are not inherited when that particular property is explicity declared on the child element either by the user or as a browser default. For example, <em> does not inherit borders because border-style is set to none by default.",
    position: 49,
    tags: ["inheritance"]
  },

  {
    id: 50,
    question:
      "If html and body both have height 100% and the first child element has height 100%, what happens to all the elements outside of the first child element?",
    answer:
      "They are still rendered but they appear outside of the html and body element's contained boxes.",
    position: 50,
    tags: ["elements"]
  },

  {
    id: 51,
    question: "What is the default display value of ::after?",
    answer: "Inline",
    position: 51,
    tags: ["pseudo elements"]
  },
  {
    id: 52,
    question: "What are the five parameters for box shadow?",
    answer: "offset-x, offset-y, blur, spread, and color",
    position: 52,
    tags: ["parameters"]
  },

  {
    id: 53,
    question: "What value does align-items set on it’s children elements?",
    answer: "align-self",
    position: 53,
    tags: ["flex"]
  },
  {
    id: 54,
    question: "What does “all” property do?",
    answer:
      "It sets all properties to their initial or inherited values (unicode-bidi and direction)",
    position: 54,
    tags: ["other"]
  },
  {
    id: 55,
    question: "What are all possible animation properties?",
    answer:
      "animation-name, animation-duration, animation-timing-function, animation-delay, animation-iteration-count, animation-direction, animation-fill-mode, animation-play-state",
    position: 55,
    tags: ["animation"]
  },
  {
    id: 56,
    question: "What are the 4 ways you can define background-size?",
    answer: "cover, contain, width, width and height",
    position: 55,
    tags: ["property values"]
  },
  {
    id: 57,
    question:
      "What happens if the border-image-width is greater than the elements border-width?",
    answer: "The image simply extends beyond the border",
    position: 57,
    tags: ["border"]
  },

  {
    id: 58,
    question: "What does a negative value for animation-delay do?",
    answer: "Starts the animation that amount in it",
    position: 58,
    tags: ["animation"]
  },
  {
    id: 59,
    question: "Is opacity inherited by children elements?",
    answer:
      "The property is not inherited, but it does apply to the element as a whole, including its contents",
    position: 58,
    tags: ["inheritance"]
  },

  {
    id: 60,
    question: "Can you have non integer values for animation-iteration-count?",
    answer:
      "Yes, you can do partial values and it will run the animation up to that partial value",
    position: 60,
    tags: ["animation"]
  },
  {
    id: 61,
    question: "What are the possible flex-wrap values?",
    answer: "nowrap | wrap | wrap-reverse",
    position: 61,
    tags: ["flex"]
  },
  {
    id: 62,
    question: "What does shape-outside do?",
    answer:
      "Allows for inline elements such as text to wrap around other elements in shapes beyond rectangles",
    position: 62,
    tags: ["other"]
  },
  {
    id: 63,
    question:
      "If background-color: red and background: url(image.png) are on an element in that order, what will the value of background-color be?",
    answer:
      "transparent because background shorthand will reset background-color to it's default value, transparent",
    position: 62,
    tags: ["background"]
  },
  {
    id: 64,
    question: "Does clear apply to inline elements?",
    answer: "No it only applies to block elements.",
    position: 64,
    tags: ["float"]
  },
  {
    id: 65,
    question: "What is outline shorthand for?",
    answer: "outline-style, outline-width, and outline-color",
    position: 65,
    tags: ["outline"]
  },
  {
    id: 66,
    question: "What properties can you change with @page rule?",
    answer:
      "You can only change the margins, orphans, widows, and page breaks of the document.",
    position: 66,
    tags: ["at rules"]
  },
  {
    id: 67,
    question:
      "What happens if you use a negative value for the property 'order'?",
    answer: "It sets it at the beginning",
    position: 67,
    tags: ["flex"]
  },
  {
    id: 68,
    question: "What does column-rule property set?",
    answer:
      "The width, style, and color of the line between multi column layouts",
    position: 68,
    tags: ["columns"]
  },

  {
    id: 69,
    question: "What determines the position of a floated element?",
    answer:
      "A floated element moves to the left or right of it's containing element or to the next floated element in it's way.",
    position: 69,
    tags: ["float"]
  },

  {
    id: 70,
    question: "What elements does the :indeterminate apply to?",
    answer:
      "<input type='radio' />, <input type='checkbox' />, and <progress />",
    position: 70,
    tags: ["pseudo class"]
  },

  {
    id: 71,
    question: "What are the possible values for 'resize'?",
    answer: "none | both | horizontal | vertical",
    position: 71,
    tags: ["other"]
  },
  {
    id: 72,
    question:
      "If an object's aspect ratio does not match its container's and it has object-fit: cover, what happens to the object?",
    answer:
      "It will take up the container and be clipped to fit the aspect ratio.",
    position: 72,
    tags: ["other"]
  },
  {
    id: 73,
    question: "What is the default value for the property 'content'?",
    answer: "normal",
    position: 73,
    tags: ["other"]
  },

  {
    id: 74,
    question: "How can you get around opacity applying to children?",
    answer:
      "Set opacity on the background-color property rather than opacity on the element directly",
    position: 74,
    tags: ["opacity"]
  },

  {
    id: 75,
    question:
      "How else can you assign a timing function besides using animation or animation-timing-function?",
    answer: "You can add timing functions to the @keyframes declaration",
    position: 75,
    tags: ["animation"]
  },
  {
    id: 76,
    question: "What are the possible values for column-span property?",
    answer: "none | all",
    position: 76,
    tags: ["columns"]
  },
  {
    id: 77,
    question: "What are the possible values for overflow?",
    answer: "visible | hidden | clip | scroll | auto | overlay",
    position: 77,
    tags: ["overflow"]
  },
  {
    id: 78,
    question: "What does :not(*) select?",
    answer:
      "Nothing because it matches any element which is not an element, so the rule will never be applied.",
    position: 78,
    tags: ["other"]
  },
  {
    id: 79,
    question: "What are the named default animation timing functions?",
    answer:
      "linear, ease, ease-in,  ease-out, ease-in-out, step-start, step-end",
    position: 79,
    tags: ["animation"]
  },
  {
    id: 80,
    question: "What does ch value represent?",
    answer: "The width of the zero character in elements font",
    position: 80,
    tags: ["value types"]
  },

  {
    id: 81,
    question: "What does @supports do?",
    answer:
      "It checks whether a specific css feature is supported by the current browser and applies the nested rules if the feature is supported",
    position: 81,
    tags: ["at rules"]
  },

  {
    id: 82,
    question:
      "If you do not set animation-fill-mode, what will happen at the end of the animation?",
    answer: "The element will go back to its default properties",
    position: 82,
    tags: ["animation"]
  },
  {
    id: 83,
    question: "What elements does the :checked pseudo class apply to?",
    answer: "input radio, input checkbox, option",
    position: 83,
    tags: ["pseudo class"]
  },
  {
    id: 84,
    question: "What types of layouts can you use column-gap with?",
    answer: "Multi-column, Flexible Box, and Grid layouts.",
    position: 84,
    tags: ["columns"]
  },

  {
    id: 85,
    question: "What are the different ways you can define a color value",
    answer:
      "hex, 8 digit hex, rgb, rgba, hsl, hsla, transparent, or color keyword, currentColor",
    position: 85,
    tags: ["color"]
  },

  {
    id: 86,
    question: "What are the three parameters the clamp() function takes?",
    answer: "a minimum value, a preferred value, and a maximum allowed value.",
    position: 86,
    tags: ["functions"]
  },
  {
    id: 87,
    question: "What are the possible values for text-decoration-line?",
    answer: "none | underline | overline | line-through | blink ",
    position: 87,
    tags: ["property values"]
  },
  {
    id: 88,
    question:
      "If an element has a background-image and background-color will background color still be rendered?",
    answer: "Yes, it will show on any transparent parts of the image.",
    position: 88,
    tags: ["background"]
  },

  {
    id: 89,
    question:
      "What does border-spacing do when border-collapse: collapse is set?",
    answer:
      "border-spacing doesn't apply anything because it only works with border-collapse: separate",
    position: 89,
    tags: ["border"]
  },
  {
    id: 90,
    question: "What does :default select?",
    answer:
      "The default element for forms, for example, if one checkbox is checked by default.",
    position: 90,
    tags: ["pseudo class"]
  },
  {
    id: 91,
    question: "What are the possible values for font-variant-caps?",
    answer:
      "normal | small-caps | all-small-caps | petite-caps | all-petite-caps | unicase | titling-caps",
    position: 91,
    tags: ["font"]
  },
  {
    id: 92,
    question: "What determines an element's currentColor value?",
    answer: "Current color is defined by the 'color' property",
    position: 92,
    tags: ["font"]
  },

  {
    id: 93,
    question: "What does box-decoration-break do?",
    answer:
      "Specifies how an element's fragments should be rendered when broken across multiple lines, columns, or pages",
    position: 93,
    tags: ["box"]
  },

  {
    id: 94,
    question: "What are the animation timing functions that accept values?",
    answer: "cubic-bezier(), steps(), frames()",
    position: 94,
    tags: ["animation"]
  },

  {
    id: 95,
    question: "List as many filter functions as you can",
    answer:
      "url(), blur(), brightness(), contrast(), drop-shadow(), grayscale(). hue-rotate, invert(), opacity(), saturate(), sepia()",
    position: 95,
    tags: ["filters"]
  },
  {
    id: 96,
    question: "Do the values of the 'content' property get added to the DOM?",
    answer: "No, css generated content is not added to the DOM tree",
    position: 96,
    tags: ["DOM"]
  },

  {
    id: 97,
    question: "What types of elements do animation properties apply to?",
    answer: "all elements, ::before and ::after pseudo-elements",
    position: 97,
    tags: ["animation"]
  },
  {
    id: 98,
    question: "What is the initial value for mask-clip property?",
    answer: "border-box",
    position: 98,
    tags: ["mask"]
  },
  {
    id: 99,
    question: "What does empty-cells do?",
    answer:
      "It determines whether cells with no content are displayed or not, with borders and backgrounds",
    position: 99,
    tags: ["table"]
  },
  {
    id: 100,
    question: "What does the clone value do on box-decoration-break?",
    answer:
      "Each box fragment is rendered independently with the specified border, padding, and margin wrapping each fragment.",
    position: 100,
    tags: ["box"]
  },
  {
    id: 101,
    question: "Can :first-child effect more than one element?",
    answer:
      "Yes it affects each dependent child. For example ul li:first-child will match the first ul li and the nested ul li ul li",
    position: 101,
    tags: ["pseudo class"]
  },
  {
    id: 102,
    question: "What elements does :link apply to?",
    answer: "<a>, <area>, or <link>",
    position: 102,
    tags: ["pseudo class"]
  },
  {
    id: 103,
    question: "How many possible values for cursor are there?",
    answer: "36",
    position: 103,
    tags: ["other"]
  },
  {
    id: 104,
    question:
      "What is one other way of selecting an element with no siblings besides :only-child?",
    answer: ":first-child:last-child or :nth-child(1):nth-last-child(1)",
    position: 104,
    tags: ["pseudo class"]
  },
  {
    id: 105,
    question: "What are all the background properties?",
    answer:
      "background-clip, background-color, background-image, background-origin, background-position, background-repeat, background-size, and background-attachment.",
    position: 105,
    tags: ["background"]
  },
  {
    id: 106,
    question: "How does sticky position work?",
    answer:
      "Sort of like a combination of relative and fixed positioning. A sticky element is treated as relatively positioned until it crosses a specified threshold, when it is then treated as ixed until it reaches the boundary of its parent.",
    position: 106,
    tags: ["position"]
  },
  {
    id: 107,
    question: "What does the dense value do for grid-auto-flow?",
    answer:
      "Attempts to fill in holes earlier in the grid, if smaller items come up later.",
    position: 107,
    tags: ["grid"]
  },
  {
    id: 108,
    question:
      "What is the difference between a descendent selector (ul li) and child selector (ul > li)?",
    answer: "Child selector only selects immediate children",
    position: 108,
    tags: ["selectors"]
  },
  {
    id: 109,
    question: "What is the initial value for background-attachment?",
    answer: "scroll",
    position: 109,
    tags: ["background"]
  },

  {
    id: 110,
    question: "What does ::first-letter do when the first element is an image?",
    answer:
      "It doesn't select anything, the first content must be letter/words.",
    position: 110,
    tags: ["pseudo element"]
  },
  {
    id: 111,
    question: "What is flex-flow short for?",
    answer: "flex-direction and flex-wrap",
    position: 111,
    tags: ["flex"]
  },
  {
    id: 112,
    question:
      "For overflow to have an effect it must either have either a set height, set width, or what?",
    answer: "white-space set to nowrap",
    position: 112,
    tags: ["overflow"]
  },
  {
    id: 113,
    question: "Besides numbers, what are the possible values for font-weight?",
    answer: "normal, bold, bolder, lighter",
    position: 113,
    tags: ["font"]
  },
  {
    id: 114,
    question: "What are the possible values for position?",
    answer: "static | relative | absolute | sticky | fixed",
    position: 114,
    tags: ["position"]
  },
  {
    id: 115,
    question: "When does text-overflow take effect?",
    answer:
      "Only when text is overflowing on one line, not  text overflowing at the bottom of a box. This can be accomplished by applying overflow: hidden and white-space: nowrap, which forces text on one line and hides overflow.",
    position: 115,
    tags: ["overflow"]
  },

  {
    id: 116,
    question:
      "If you define multiple background-images which one is shown on top?",
    answer: "The first one declared will be on top",
    position: 116,
    tags: ["background"]
  },
  {
    id: 117,
    question:
      "What do the keyword values (medium, etc) for border-width width map to pixel values?",
    answer:
      "They don't, the spec does not give actual implementation values for them",
    position: 117,
    tags: ["background"]
  },
  {
    id: 118,
    question:
      "If sibling elements have different flex-grow values, how are sizes determined?",
    answer:
      "As a ratio between the two values, for  example 2 and 1 will be 66% and 33% respectively",
    position: 118,
    tags: ["flex"]
  },

  {
    id: 119,
    question: "What are the values of box shadow?",
    answer: "inset, offset-x, offset-y, blur radius, spread value, color",
    position: 119,
    tags: ["shadow"]
  },
  {
    id: 120,
    question: "By default, what size does the height property affect?",
    answer: "The content height, without border, paddings, or margins",
    position: 120,
    tags: ["other"]
  },
  {
    id: 121,
    question: "What are the possible values for justify-content?",
    answer:
      "left | right | space-between | space-around | space-evenly | stretch | unsafe | safe | center | start | end | flex-start | flex-end",
    position: 121,
    tags: ["flex"]
  },
  {
    id: 122,
    question: "Can list-style apply to elements besides <li>s?",
    answer:
      "Yes, it applies to any element with the property display set to list-item",
    position: 121,
    tags: ["other"]
  },
  {
    id: 123,
    question:
      "What is the value of the second syntax value in background position if only the first value is given?",
    answer: "center",
    position: 123,
    tags: ["background"]
  },
  {
    id: 124,
    question: "What is place-content property for?",
    answer: "A shorthand for align-content and justify-content",
    position: 124,
    tags: ["flex"]
  },

  {
    id: 125,
    question: "What are the keyword values for white-space?",
    answer: "normal | pre | nowrap | pre-wrap | pre-line",
    position: 125,
    tags: ["property values"]
  },
  {
    id: 126,
    question:
      "If two values are provided for border-color what do they signify?",
    answer: "first value is top and bottom, second is left and right",
    position: 126,
    tags: ["property values"]
  },
  {
    id: 127,
    question: "Does ::first-line affect inline-elements?",
    answer: "No, it only affects block level elements",
    position: 127,
    tags: ["pseudo element"]
  },

  {
    id: 128,
    question: "What does :root select?",
    answer: "html selector",
    position: 128,
    tags: ["other"]
  },

  {
    id: 129,
    question: "What are the possible values for text-decoration-style?",
    answer: "solid | double | dotted | dashed | wavy",
    position: 129,
    tags: ["property values"]
  },
  {
    id: 130,
    question: "What happens when you use :first-of-type without an element?",
    answer:
      "It defaults to the universal selector, so basically *:first-of-type and each first type in the selection gets selected",
    position: 130,
    tags: ["other"]
  },
  {
    id: 131,
    question:
      "If you set background-attachment: fixed, what happens to background-origin?",
    answer: "It gets ignored",
    position: 131,
    tags: ["background"]
  },
  {
    id: 132,
    question: "What are the possible values for Border-image-repeat?",
    answer: "stretch | repeat | round | space",
    position: 132,
    tags: ["border"]
  },

  {
    id: 133,
    question:
      "If only two values are provided to background-position, what do they indicate?",
    answer: "horizontal and vertical",
    position: 133,
    tags: ["background"]
  },
  {
    id: 134,
    question: "What is the initial value for border-width?",
    answer: "medium",
    position: 134,
    tags: ["border"]
  },
  {
    id: 135,
    question: "What does ::selection select?",
    answer: "Part of a document that has been highlighted by the user",
    position: 135,
    tags: ["pseudo element"]
  },
  {
    id: 136,
    question: "What are the possible values for object-fit?",
    answer: "fill | contain | cover | none | scale-down",
    position: 136,
    tags: ["property values"]
  },

  {
    id: 137,
    question: "What is the default value for caption-side?",
    answer: "top",
    position: 137,
    tags: ["default value"]
  },
  {
    id: 138,
    question: "What are the possible values for text-transform?",
    answer: "none | capitalize | uppercase | lowercase | full-width",
    position: 138,
    tags: ["property values"]
  },
  {
    id: 139,
    question: "What is the initial value for flex-grow?",
    answer: 0,
    position: 139,
    tags: ["flex"]
  },
  {
    id: 140,
    question: "What level of specificity do media queries add?",
    answer: "They don't add any",
    position: 140,
    tags: ["at rules"]
  }
];

export default questions;
