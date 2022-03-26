import React from 'react';

const Hire = ({hire}) => {
    return (
        <div>
             <h2>Hired Player</h2>
                <p>selectedPlayer:{hire.length}</p>
        </div>
    );
};

export default Hire;