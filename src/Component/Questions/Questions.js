import React from 'react';
import './Questions.css';
const Questions = () => {
    return (
        <div className='question'>
            <div className="firstQuestion">
                <h1>How Does React Actually Work?</h1>
                <p> React implements a virtual DOM and it works in declarative code. Declaration code is well organized by component and state. For this, You can image a restaurant where you just order the waiter, you don't need to go to kitchen. Virtual Dom helps to works fast the system and also React helps you to build better user interfaces. React is library that has hooks which will help you a lot.</p>
            </div>
            <div className="secondQuestion">
                <h1>Differences between Props and State</h1>
                <ul>
                    <li>Props are read-only but State changes can be asynchronous.</li>
                    <li>Props are immutable but State is mutable.</li>
                    <li>Props allow you to pass data from one component to other components as an argument on the other hand State holds information about the components.</li>
                    <li>Props can be accessed by the child component but State cannot be accessed by child components.</li>
                    <li>The State is internal and controlled by the React Component itself but Props are external and controlled by whatever renders the component.	</li>
                </ul>
            </div>
        </div>
    );
};

export default Questions;