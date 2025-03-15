import React from "react";

const EmployeeContext = React.createContext();

class CustomApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                id: 101,
                Name: "John"
            }
        };
    }

    render() {
        return (
            <div>
                <EmployeeContext.Provider value={this.state.data}>
                    <Employee />
                </EmployeeContext.Provider>
            </div>
        );
    }
}

class Employee extends React.Component {
    // Assign contextType to access context in class component
    static contextType = EmployeeContext;

    constructor(props) {
        super(props);
        console.log(this.context); // Now it will work correctly
    }

    render() {
        return (
            <div>
                <h1>Welcome to Employee component</h1>
                <p>Employee Id: {this.context.id}</p>  
                {/* Ensure Salary component is defined or remove */}
            </div>
        );
    }
}
export default CustomApp;