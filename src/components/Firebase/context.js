import React, { Component } from 'react';

const FirebaseContext = React.createContext(null);

export const withFirebase = Component => props => (
    <FirebaseContext.Consumer>
        {firebase => <Component {...props} firebase={firebase} />}
    </FirebaseContext.Consumer>
)

export default FirebaseContext;

/*
const withFirebaseClearerSyntax = function(component) {
    return function(props) {
        return (
            <FirebaseContext.Consumer>
                {firebase => <Components {...props} firebase={firebase} />}
            </FirebaseContext.Consumer>
        )
    }
}
*/