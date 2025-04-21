### Module 1: React Basics & Setup

**Quick Analogy**
"Think of React like Lego blocks. Each component is a small block you can stack to build a whole interface."

---

**What is React**

- React is a JavaScript library that lets you build user interfaces using reusable components, like functions that return HTML
- Originally built by engineers at Facebook to manage complex user interfaces on large apps like Instagram and Facebook itself
- Component-based structure: Think of your UI as a puzzle made of small pieces — components are those pieces, each doing one job. You build the full interface by combining them.

"Instead of stitching strings of HTML together or manipulating the DOM manually, you use JSX — a syntax that looks like HTML but lives inside JavaScript. It’s like writing HTML with superpowers."

---

**Installing React with Vite**
"Let’s get your React project running using Vite — it’s fast, minimal, and the industry favorite for modern setups."

**Quick Analogy**
"Think of Vite like a turbo-charged starter pack. It gets you up and running without all the old-school config drama."

```bash
npm create vite@latest my-app --template react
cd my-app
npm install
npm run dev
```

"Now open your browser. Boom — you have a React app running."

---

**Understanding the File Structure**

- `main.jsx` is the entry point: This is where React starts rendering your app. It takes your `App` component and mounts it into the real DOM using `ReactDOM.createRoot`. Think of it as the root plug that powers the entire UI.
- `App.jsx` is your root component: This is the top-level component that holds your entire application UI. Think of it as the container that wraps all other components and structures how your app looks.
- `index.css` is for global styles: It applies base CSS rules across your app, like setting font families, background color, or resetting margins. Think of it as the universal stylesheet shared by every component.

---

**Your First Component**

```jsx
function Hello() {
  return <h1>Hello, React!</h1>;
}

export default Hello;
```

"Let's render that in `App.jsx`."

```jsx
import Hello from "./Hello";

function App() {
  return (
    <div>
      <Hello />
    </div>
  );
}

export default App;
```

---

**JSX Rules Quickfire**

- One parent element
- Use `className` instead of `class`
- Close all tags or use self closing tags
- Inject variables with curly braces `{}`

Live demo:

```jsx
const name = "Phil";
const age = 34;

<h2>
  {name} is {age} years old
</h2>;
```

---

**Wrap Up**
"You now know what React is, how to set it up, and how to build your first component."

**Homework**

- Build a component called `Profile` with your name, age, and a greeting.
- Render it in `App.jsx`

**Demo Project**
Build a simple Profile Page using a functional component.

```jsx
function Profile() {
  const name = "Phil";
  const age = 34;
  return (
    <div>
      <h1>Hello, my name is {name}</h1>
      <p>I am {age} years old.</p>
    </div>
  );
}

export default Profile;
```

In `App.jsx`:

```jsx
import Profile from "./Profile";

function App() {
  return (
    <div>
      <Profile />
    </div>
  );
}

export default App;
```
