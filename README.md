REACT is a javascript library used to build frontend web apps. 
react makes developing web app easy

There are two ways to create react apps:-

1. Custom react app using command "create-react-app"
   disadvantage: it installs unwanted files, thus makes application bulky
   these have .js files for functionality implementation
   create is an utility

2. Build using bundlers such as vite, webpack 
   these have .jsx files which include html within javascript

React creates its own DOM called as virtual DOM, compares it to real DOM and uodates the real DOM according to any changes, reactDOM library is used

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />            // App is a react component   
  </React.StrictMode>
);
   
-> REACT component typically contains JSX, which is a combination of HTML-like syntax and JavaScript.
-> The JSX returned by <App /> is not directly written into the index.html file. Instead, React renders it dynamically into the DOM at runtime inside the element with the id 'root'.
-> Wrapping the <App /> component in <React.StrictMode> enables additional checks and warnings during development to help catch potential problems in your code.


JSX
-> Using vite react component(.jsx file) must start with capital letter
-> must return only one element, hence concept of fragment
-> custom tags are used to use another component in place like <chai/>

Custom react(.js files)
-> here also fragment concept
-> must start component's name with capital letter
-> custom tags are used to use another component in place like <chai/>

We can create own react without installingreact ,just by using javascript
-> react code are converted or persed into js objects to form tree during compilation 