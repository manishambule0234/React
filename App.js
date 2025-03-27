
// parcel uses:
// Dev Build
// Local Server
// HMR = Hot Module Replacement
// File Watching Algorithm - written in C++
// Caching - Faster Builds
// Image Optimization
// Minification
// Bundling
// Compress
// Consistent Hashing
// Code Splitting
// Differential Bundling - support older browsers
// Diagnostic
// Error Handling
// HTTPs
// Tree Shaking - remove unused code
// Different dev and prod bundles


import React from "react" ;
import ReactDOM from "react-dom/client" ;
const heading1 = React.createElement(
"h1",
{
id: "title" ,
key: "h1"
},
"Heading 1 for parcel"
);
console.log(heading1)
const heading2 = (
    <h1 id="title" key="h2">Namaste React</h1>
);

    const container = React.createElement(
        "div",
        {
            id: "container",
            hello: "world",
        },
        [heading1,heading2]
    );
       
    
        const root = ReactDOM.createRoot(document.getElementById("root"));

        root.render(container);
