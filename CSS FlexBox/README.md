# Flexbox Properties

## Container Properties

### 1. `display: flex;`
   - Enables the Flexbox layout for the container.

### 2. `flex-direction`
   - Defines the direction in which the flex items are placed in the flex container.
   - Values: `row`, `row-reverse`, `column`, `column-reverse`.

### 3. `flex-wrap`
   - Specifies whether the flex container should wrap its contents onto multiple lines.
   - Values: `nowrap`, `wrap`, `wrap-reverse`.

### 4. `align-content`
   - Aligns the lines within the flex container when there is extra space.
   - Values: `flex-start`, `flex-end`, `center`, `space-between`, `space-around`, `stretch`.

### 5. `align-items`
   - Aligns the items along the cross axis within the flex container.
   - Values: `flex-start`, `flex-end`, `center`, `baseline`, `stretch`.

### 6. `gap`
   - Sets the spacing between the flex items.
   - Values: length units, percentage, or `normal`.

## Item Properties

### 1. `order`
   - Specifies the order in which the flex items appear in the flex container.
   - Default: 0.

### 2. `flex-grow`
   - Defines the ability of a flex item to grow relative to the other items in the container.
   - Default: 0.

### 3. `flex-shrink`
   - Specifies the ability of a flex item to shrink relative to the other items in the container.
   - Default: 1.

### 4. `align-self`
   - Allows the default alignment to be overridden for a particular flex item.
   - Values: `auto`, `flex-start`, `flex-end`, `center`, `baseline`, `stretch`.
