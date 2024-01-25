# CSS Position
*_Chrome or any browser has `position:static;` by deafult; which we can't change any positions of them, that is accordingly about the code we wrote in html._*
_*NOTE:-* transform, filter or perspective properties can also make an element appear as positioned._

# Types of Positions
## 1. Understanding "position: relative" in CSS

In CSS, the `position: relative` property is used to position an element relative to its normal position in the document flow. Let's dive into a clear explanation of this concept.
    - It is dynamic we can add top, bottom, left, right whatever we want.
    - We can overlap one box on another.

## What is `position: relative`?

When you apply `position: relative` to an element, it remains in the normal flow of the document, but you can shift it from its original position based on specified top, right, bottom, or left values.

## How does it work?

1. **Normal Document Flow:** The element is initially placed in its normal position in the document flow.

2. **Offset from Normal Position:** By using properties like `top`, `right`, `bottom`, or `left`, you can offset the element from its normal position.

## What if we want to send one box backward to another one ? 
`position: relative;`
`z-index: 1;` _where 0 is auto or deafult._
 Useful for managing the visual hierarchy of overlapping elements, such as dropdown menus or modal dialogs, in web development.

    
## 2. Understanding "position: absolute" in CSS

In web development, the CSS property `position: absolute` plays a crucial role in positioning elements on a webpage. Let's break down this concept in simple terms.

## What is `position: absolute`?

When you apply `position: absolute` to an element, you're telling the browser to position that element relative to its nearest positioned ancestor. If there is no positioned ancestor, it will be positioned relative to the initial containing block, which is usually the entire document.

## How does it work?

1. **Relative to the Ancestor:** If the element has a positioned ancestor (an element with a position value other than static), it positions itself based on that ancestor's top, right, bottom, and left properties.

2. **No Positioned Ancestor:** If there's no positioned ancestor, it positions itself relative to the document body.


## 3. Understanding "position: fixed" and "position: sticky" in CSS

In CSS, the `position: fixed` and `position: sticky` properties are used to control the positioning of elements on a webpage. Let's explore these concepts and understand where they might be used in different sections of a website.

## Position: Fixed

The `position: fixed` property is used to fix an element relative to the browser window. This means the element remains in the same position even when the user scrolls the page.

### Where to Use:

- **Navigation Bars:** Fixing the navigation bar at the top of the page can provide easy access to menu options regardless of scrolling.

- **Call-to-Action Elements:** Fixed elements like buttons or banners can stay visible, ensuring they are always in the user's view.

- **Headers or Footers:** Keeping headers or footers fixed can provide a consistent branding or navigation presence.

## Position: Sticky

The `position: sticky` property is a hybrid of `relative` and `fixed`. The element is treated as `relative` positioned until it crosses a specified point during scrolling, after which it is treated as `fixed` positioned.

### Where to Use:

- **Navigation Menus:** Sticky navigation menus can offer easy access to links as users scroll down a lengthy page.

- **Table Headers:** In tables with a lot of data, sticky headers keep column labels visible while scrolling.

- **Sidebars:** A sticky sidebar can enhance user experience by keeping important information visible during scrolling.
