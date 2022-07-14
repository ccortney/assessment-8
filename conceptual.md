### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it? **A popular, powerful front-end framework developed and sponsored by Facebook. It allows us to make reusable "view components" classes/functions that contain logic and HTML.** 

- What is Babel? **Babel is a tool that converts newer code into a compatible version for older JavaScript browsers.**

- What is JSX? **JSX is a React extension that provides a way to structure component rendering using syntax that is similar to HTML, but is more strict than HTML.**

- How is a Component created in React? **A component is the building block of React that contains pieces of UI and view logic. We can use classes or functions, but I believe functions are more popular now. The component returns the HTML that should be rendered. We use <ComponentName /> to render the component..**

- What are some difference between state and props? **Props is an object that is defined for each component and are immutable once passed in. State is created using useState which takes one arguement, what you'd like the initial state to be. This eturns an array with two values (what the piece of state is and a function to change it). If the data will ever change, it needs to be in state somewhere!**

- What does "downward data flow" refer to in React? **"Smart" parent components with simpler child components. A parent component defines a function. The function is passed as a prop to a child component. The child components invokes the prop. The parent function is called, usually setting new state. The parent component is re-rendered along with its children.**

- What is a controlled component? **Controlled components in React are those in which form data is handled by the component's state. React controls what is shown (the value of the component) and what happens when the user types (this gets kept in state).**

- What is an uncontrolled component? **Uncontrolled components in React are those in which form data is not handled by the component's state. Some inputs and external libraries require it (such as file inputs). You will not have onChange for that input. Instead you will have only an onSubmit in the formTag.**

- What is the purpose of the `key` prop when rendering a list of components? **Keys help React indentify which items are changed/added/removed and should provide a stable identity.**

- Why is using an array index a poor choice for a `key` prop when rendering a list of components? **Using an array is not a good idea as elements can be changed, reordered, or deleted. This would cause the keys to change when the component is re-rendered and cause performance problems or bugs with component state.**

- Describe useEffect.  What use cases is it used for in React components? **useEffect is a built-in hook for "side effect". useEffect accepts two arguments (the callback function and when you want it to run). It will automatically run after the first render and after all rerenders by default unless you specify otherwise. We can use useEffect to fetch data, start a timer, manually change the DOM, or any other side effect.**

- What does useRef do?  Does a change to a ref value cause a rerender of a component? **useRef is another built-in hook which returns a mutable object with a key of current, whose value is equal to the inital value passed into the hook. The object persists across renders, so it is like a local variable but independent of state. Mutating the object does not trigger a re-render, like iwth state.**

- When would you use a ref? When wouldn't you use one? **Accessing an underlying DOM element and setting up/clearing timers are common uses of refs. Since refs can expose DOM elements for us, it can be tempting to use them to access the DOM and make changes, but this is NOT how refs should be used. React should control the state of the DOM.**

- What is a custom hook in React? When would you want to write one? **You can make your own hooks to abstract logic, handle repeated tasks, generate your own JSX, etc. Your custom hook should start with the keyword "use". Your custom hook will create a new piece of state and a function to change that state. We can then return those two things. When we call our hook in our components, it creates the state and function with the names we've chosen for that compnoent and can be reused/renamed in multiple components, each with its own piece of state. You should think about creating a custome hook during these situations: same business logic inside multiple components and business logic cluttering up a single component. Don't start by asking what custom hooks you need. Lean on custom hooks to help you refactor your code.**