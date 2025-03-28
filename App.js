
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

//React.createElement => Object => HTML(DOM)

// const heading1 = React.createElement(
// "h1",
// {
// id: "title" ,
// key: "h1"
// },
// "Heading 1 for parcel"
// );
// console.log(heading1)

// JSX => React.createElement => Object => HTML(DOM)

const heading = (
    <h1 id="title" key="h2">Namaste React</h1>
);

    // const container = React.createElement(
    //     "div",
    //     {
    //         id: "container",
    //         hello: "world",
    //     },
    //     [heading1,heading2]
    // );


    //React Component
    //->Functional Component :New way of writing component
    //->Class Component :Old way of writing component
    //Name of component should start with Capital letter-its not a rule but a convention

    //Functional Component:It is a normal function

    // const HeaderComponent = () => {
    //     // return <div><h1>Namaste React functional component</h1><h2>This is a h2 tag</h2></div>;
    //     return (
    //         <div>
    //             <h1>Namaste React functional component</h1>
    //             <h2>This is a h2 tag</h2>
    //         </div>
    //     );
    // };

    const Title = () => (
        <h1 id="title" key="h2">Namaste React from functional component</h1>
    );

    var xyz=10;

    const HeaderComponent = () =>(
            <div>
                {heading}
                  {/* {Title()}  Because functional component is at the a normal function and we can call it like a function */}
                 <Title /> 
                 {/* it is known as component composition:The above line i.e. <Title /> i.e. calling a component inside a component */}

                 {/* you can write any JS code inside {} */}
                 {console.log(xyz)}
                 {1+2*3}

                <h2>Namaste React functional component</h2>
                <h2>This is a h2 tag</h2>
            </div>
        );
    
       
 
        const root = ReactDOM.createRoot(document.getElementById("root"));
        
        root.render(heading);
        root.render(<HeaderComponent />)
