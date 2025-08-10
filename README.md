

<h1 align="center">Counter List</h1>

<p align="center">
    Raiqa Health Assignement
</p>


<p align="center">
  <a href="#introduction"><strong>Introduction</strong></a> ·
  <a href="#features"><strong>Features</strong></a> ·
  <a href="#tech-stack"><strong>Tech Stack</strong></a> ·
  <a href="#running-locally"><strong>Running Locally</strong></a> ·
</p>
<br/>

## Introduction

A simple React application that allows users to:
- Increment/Decrement a counter
- Add the current counter value to a list
- Sort the list in ascending or descending order
- Highlight the highest and lowest numbers
- Reset the list

## Features

Here are the core features of the project:

### Counter
- Displays a number starting from `0`
- `+` button → increments the number
- `-` button → decrements the number (cannot go below `0`)
- **Add** button:
  - Adds the current number to the list if greater than `0`
  - Resets counter to `0` after adding
- Prevents duplicate entries in the list

### List View
- Displays all numbers added
- Sort toggle:
  - Ascending ↔ Descending
- Highlights:
  - **Highest number** 
  - **Lowest number** 
- Reset button → clears the entire list
- Data persists in browser `localStorage

## Tech Stack

**React** (with `useState` and `useEffect` hooks)
- **CSS** for styling 
- **LocalStorage** for data persistence


---

## 📦 Installation & Setup


### Cloning the repository to the local machine.

```bash
git clone
```

### Installing the dependencies.

```bash
npm install
```

### Start development server

```bash
npm start
```


### 🌐 Deployment

This project is deployed on Vercel.
<a href="#counter-list-seven.vercel.app"><strong>counter-list link </strong></a> <br>.
You can deploy your own version by:

Pushing the project to a public GitHub repository.

Connecting your GitHub account to Vercel.

Importing the project and deploying the main branch.

<img alt="counter list" src="public/Screenshot 2025-08-10 131243.png">
