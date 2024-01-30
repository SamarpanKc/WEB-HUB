# Media Queries in CSS

Media queries in CSS allow you to apply styles based on the characteristics of the device or browser window. This helps create responsive web designs that adapt to different screen sizes and devices.


## Introduction

Media queries are a crucial part of responsive web design. They enable you to customize styles based on factors such as screen width, device type, and more.

## Syntax

The basic syntax for a media query in CSS looks like this:
- ```css
    @media only screen and (max-width: 600px) {
    /* Styles for screens up to 600px wide */
    }

## Common Media Query Breakpoints
Small devices (phones): `@media only screen and (max-width: 600px)`
Medium devices (tablets): `@media only screen and (min-width: 601px) and (max-width: 1024px)`
Large devices (desktops): `@media only screen and (min-width: 1025px)`
Adjust these breakpoints based on your design requirements.

## Best Practices
Test on various devices and browsers.
Use relative units (like `em` or `%`) for better scalability.
Prioritize mobile-first design for a smoother user experience.