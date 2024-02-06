# CSS Animation Properties

## `@keyframes`

- The `@keyframes` rule in CSS is used to create animations by gradually changing from one set of CSS styles to another.

**Example:**
- ```css
   @keyframes slide-in {
     from {
       transform: translateX(-100%);
     }
     to {
       transform: translateX(0);
     }
   }

## `animation`

- The animation shorthand property is used to apply animations to elements.

**Example:**
- ```css
   animation: slide-in 2s ease-in-out 0.5s infinite;
- The above example refers to the slide-in keyframes animation, lasts for 2 seconds, has an ease-in-out timing function, starts with a 0.5s delay, and repeats infinitely.

## `animation-name`

- Specifies the name of the @keyframes animation.

**Example:**
- ```css
   animation-name: slide-in;

## `animation-duration`

- Sets the duration of the animation.

**Example:**
- ```css
   animation-duration: 2s;

Similarly,
- `animation-timing-function` = Specifies the speed curve of the animation.
- `animation-delay` = Defines a delay before the animation starts.
- `animation-iteration-count` = Sets the number of times an animation should run.
- `animation-direction` = Specifies whether the animation should play forward, backward, or     alternate.
- `animation-fill-mode` = Defines what values are applied by the animation outside the time it is executing.
**Example:**
- ```css
   animation-fill-mode: forwards;

- `animation-play-state` = Allows you to pause and resume the animation.
**Example:**
- ```css
   animation-play-state: paused;