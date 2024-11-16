# React vs JavaScript Event Handling

- In **JavaScript**, we use `addEventListener` to attach events, like this:
  ```javascript
  element.addEventListener("click", handleClick);
  ```
- In React, we directly use event handlers as props, like `onClick`, `onChange`, etc.
  ```jsx
  {
    <button onClick={handleClick}>Click Me</button>;
  }
  ```

## Examples

1.

```jsx
const [Name, setName] = useState("Samarpan");

const handleChange = (e) => {
  setName(e.target.value);
};

{
  /* onChange property */
}
<input type="text" value={Name} onChange={handleChange} />;
```

- `useState("Samarpan")`: Initializes a state variable Name with the value "Samarpan" and provides a function setName to update it.
- `handleChange(e)`: Updates Name to the value of the input field when it changes.
- `<input>` with `onChange`: Links the input field's value to Name and calls handleChange on user input to reflect changes dynamically.
<br><br>

```jsx
<input type="text" name='email' onChange={handleChange2}/>
<input type="text" name='phone' onChange={handleChange2}/>
const [Form, setForm] = useState({email:"", phone:""})
const handleChange2 = (e) =>{
    setForm({...Form, [e.target.name]:e.target.value})
    console.log(Form)
}
```
1. **State Initialization:**

    - `useState` initializes a state object, Form, with properties `email` and `phone`, both set to empty strings.
        ```jsx
        const [Form, setForm] = useState({email: "", phone: ""});
        ```
2. **Inputs:**

    - Two input fields are defined with the `name` attributes set to `email` and `phone`, respectively.
    - The `onChange` event handler `handleChange2` is triggered whenever the user types in these fields.
        ```jsx
        <input type="text" name="email" onChange={handleChange2} />
        <input type="text" name="phone" onChange={handleChange2} />
        ```
3. **The `handleChange2` Function:**
    - Captures changes in the input fields.
    - Updates the corresponding property in the `Form` state object using the `name` attribute of the input `(e.target.name)`.
    - Uses the spread operator `(...Form)` to copy the existing `Form` data while only updating the relevant field.  
        ```jsx
        setForm({...Form, [e.target.name]: e.target.value});
        ```
4. **Logging State:**

    - Each time `setForm` is called, it updates the state, and `console.log(Form)` logs the current form data.
<br><br>
## Another Way
- if want to empty decleration,
    ```jsx
    const [Form, setForm] = useState({})
    ```
- then use `?:` if-else
    ```jsx
    <input type="text" name='email' value={Form.email?Form.email:""} onChange={handleChange2}/>
    <input type="text" name='phone' value={Form.phone?Form.phone:""} onChange={handleChange2}/>
    ```
<br><br>

# Commonly Used React Event Handlers

## **Mouse Events**

- **`onClick`**: Triggered when an element is clicked.
- **`onDoubleClick`**: Triggered when an element is double-clicked.
- **`onMouseEnter`**: Triggered when the mouse pointer enters an element.
- **`onMouseLeave`**: Triggered when the mouse pointer leaves an element.
- **`onMouseDown`**: Triggered when a mouse button is pressed on an element.
- **`onMouseUp`**: Triggered when a mouse button is released over an element.

## **Keyboard Events**

- **`onKeyDown`**: Triggered when a key is pressed.
- **`onKeyPress`** _(Deprecated)_: Use `onKeyDown` instead; triggered when a key produces a character value.
- **`onKeyUp`**: Triggered when a key is released.

## **Form Events**

- **`onChange`**: Triggered when the value of an input element changes.
- **`onSubmit`**: Triggered when a form is submitted.
- **`onFocus`**: Triggered when an element gains focus.
- **`onBlur`**: Triggered when an element loses focus.

## **Touch Events (for mobile)**

- **`onTouchStart`**: Triggered when a touch starts.
- **`onTouchMove`**: Triggered when a touch moves across an element.
- **`onTouchEnd`**: Triggered when a touch ends.

## **Drag and Drop Events**

- **`onDrag`**: Triggered when an element is being dragged.
- **`onDragStart`**: Triggered when dragging starts.
- **`onDragOver`**: Triggered when a dragged element is over a drop target.
- **`onDrop`**: Triggered when a dragged element is dropped.

## **Focus Events**

- **`onFocus`**: Triggered when an element receives focus.
- **`onBlur`**: Triggered when an element loses focus.

## **Clipboard Events**

- **`onCopy`**: Triggered when content is copied.
- **`onPaste`**: Triggered when content is pasted.
- **`onCut`**: Triggered when content is cut.

## **Media Events**

- **`onPlay`**: Triggered when media starts playing.
- **`onPause`**: Triggered when media is paused.
- **`onVolumeChange`**: Triggered when the volume is changed.
