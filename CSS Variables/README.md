# Understanding Variables in CSS

CSS variables, also known as custom properties, allow you to store and reuse values in your stylesheets. These variables can be either global or local, each serving different purposes. Let's break down these concepts in a simple and easy-to-understand manner.

## Global Variables
- Declared using the :root selector.
- Accessible throughout the entire stylesheet.
- Defined outside any selector or rule.
- Example: `:root { --color: blue; }`and use wherever you want.

## Local Variables
- Declared within a specific selector or rule.
- Scoped to that selector or rule, not accessible outside.
- Example: `.container { --local-padding: 10px; }` and use only that clid class.