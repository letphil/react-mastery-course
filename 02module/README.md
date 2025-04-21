### Module 2: Components & Props

**Intro**
"Alright, now that you're set up with React, let's talk components — the real building blocks of your UI."

"We’ll also pass data between them using props. Let’s go."

---

**What is a Component?**

**Quick Example**
"Just like a JavaScript function returns a value, a React component returns JSX (HTML-like structure). Think of it as a function that returns UI."\*\*

- A function that returns JSX
- Must start with a capital letter

Example:

```jsx
function Header() {
  return <h1>My App</h1>;
}
```

"Each part of your UI can be a component — buttons, cards, navbars."

---

**Component Tree**

- Components can nest inside each other
- Parent -> Child relationship

```jsx
function App() {
  return (
    <div>
      <Header />
      <Footer />
    </div>
  );
}
```

---

**Props: Passing Data**

- Props = parameters for components
- Passed like HTML attributes
- Read-only

```jsx
function Welcome({ name }) {
  return <h2>Welcome, {name}!</h2>;
}

function App() {
  return <Welcome name="Phil" />;
}
```

"Props let you reuse the same component with different data."

---

**Destructuring Props**
"Cleaner way to use props:"

```jsx
function UserCard({ name, job }) {
  return (
    <p>
      {name} is a {job}
    </p>
  );
}
```

---

**The children Prop**
"This is how you pass JSX inside your component:"

```jsx
function Layout({ children }) {
  return <div className="box">{children}</div>;
}

function App() {
  return (
    <Layout>
      <h1>Hello</h1>
    </Layout>
  );
}
```

---

**Wrap Up**
"Now you know how to build reusable components and pass data using props."

**Homework**

- Build a `UserCard` that takes name, job, and avatar URL as props
- Render multiple cards with different data

**Demo Project**
Team Page using props:

```jsx
function UserCard({ name, job, photo }) {
  return (
    <div>
      <img src={photo} alt={name} width="100" />
      <h3>{name}</h3>
      <p>{job}</p>
    </div>
  );
}

function App() {
  const team = [
    {
      name: "Phil",
      job: "Frontend Developer",
      photo: "https://via.placeholder.com/100",
    },
    {
      name: "Edmund",
      job: "Backend Developer",
      photo: "https://via.placeholder.com/100",
    },
  ];

  return (
    <div>
      {team.map((member, index) => (
        <UserCard
          key={index}
          name={member.name}
          job={member.job}
          photo={member.photo}
        />
      ))}
    </div>
  );
}

export default App;
```
