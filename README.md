# 🧱 Dev Stack Builder

**Build Your Ideal Development Stack** — a single-page React app where you can explore curated
frontend, backend, database, language, styling and DevOps technologies, compare them side by
side, and assemble the stack that fits your next project.

## 🧰 Technologies Used

- React 18/19 (function components + hooks)
- Vite as the build tool and dev server
- Tailwind CSS for all styling
- react-toastify for the add / duplicate / remove / clear alerts
- JSON file (`public/data/technologies.json`) as the data source, loaded with Suspense

## ⚡ Three Features I Like

1. One-click stack builder — the Add to Stack button disables itself and turns into
   "✓ Added to Stack", and a too-fast double add shows a warning toast instead of a duplicate.
2. Live "Your Stack" sidebar — selected count, each item with icon, category and a remove ✕
   button, an empty-state box, and a Remove All button that clears everything at once.
3. One-value brand theme — the orange → pink → violet gradient is defined once in
   tailwind.config.js as `brand`; the logo tile, brand text, hero highlight and every primary
   button all read from that single line. Fully responsive: 1 / 2 / 3 card columns and a
   hamburger navbar on mobile.

## 🚀 Run It Locally

- `npm install`
- `npm run dev` → open http://localhost:5173
- `npm run build` for the production build

## 📸 Screenshots

Your Stack — empty state:

![Your Stack empty](ui/YourStack-without.png)

Your Stack — with selected technologies:

![Your Stack with items](ui/YourStack-with.png)

## 📂 Project Structure

- public/data/technologies.json — the 12 technologies (id, name, category, icon, rating…)
- src/components/Navbar.jsx — sticky navbar + mobile hamburger menu
- src/components/Hero.jsx — two-tone heading, CTA buttons, banner image
- src/components/TechnologiesSection.jsx — card grid + sidebar layout
- src/components/TechnologyCard.jsx — one card (icon, badge, rating, add button)
- src/components/StackSidebar.jsx — the Your Stack panel
- src/components/Footer.jsx — brand block, link groups, bottom bar
- src/App.jsx — owns all state: stack, add/remove/remove-all, toasts

## ❓ React Questions (in my own words)

**1. What is JSX, and why is it used in React?**
JSX lets me write HTML-like markup inside JavaScript. Browsers cannot read it directly, so
Vite converts it into normal React.createElement calls. I use it because the UI structure and
the logic sit together in one file, which is much easier to read than building elements with
plain JavaScript.

**2. What is the difference between props and state?**
Props are values a component receives from its parent, like function arguments — the child
only reads them. State is the component's own memory, created with useState, and when it
changes React re-renders. In my project TechnologyCard only reads props, while App owns the
stack state.

**3. What does the useState hook do, and where did you use it in this project?**
It gives a component a value plus a setter function to update that value. I used it in
App.jsx for `stack` (the selected technologies) and in Navbar.jsx for `menuOpen` (hamburger
menu open or closed).

**4. What does the useEffect hook do, and why did you need it to load the JSON data?**
useEffect runs code after a render, for side effects like fetching; with an empty `[]` it runs
only once. In this project I actually loaded the JSON with the newer Suspense pattern instead:
App creates the fetch promise once, TechnologiesSection reads it with `use()`, and while the
promise is pending Suspense shows my "Loading technologies…" message. Same job as useEffect
plus a loading flag — I chose Suspense to learn the modern way.

**5. Why does every item in a .map() list need a unique key prop?**
The key tells React which item is which between renders. Without stable unique keys, when the
list changes React may reuse or mix up the wrong DOM nodes. I used `tech.id` as the key for
both the technology cards and the stack items.

**6. What is conditional rendering? Show one place you used it.**
It means showing different UI depending on a condition, with `&&` or a ternary. In
StackSidebar.jsx, when `stack.length === 0` it shows the dashed "Your stack is empty." box,
otherwise it shows the item list and the Remove All button. The navbar dropdown and the card
button text are two more places.

**7. How do you pass data from a parent to a child, and how does a child send something back?**
Parent to child: through props, like `<TechnologyCard tech={tech} />`. Child to parent: the
parent passes a function as a prop and the child calls it. My card's button calls
`onAdd(tech)`, so the click travels up to App, which updates the stack state.