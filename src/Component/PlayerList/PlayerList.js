import React from 'react';
import './PlayerList.css';

const PlayerList = ({player,handleHire}) => {
    // const {player,handleHire} =props;
    const {price,name,age,picture} =player;
    return (
        <div className='player-list'>
            
            <img src={picture} alt=""></img>
            <div className='player-details'>
            <h3>NAME: {name}</h3>
            <p>AGE:{age}</p>
            <p>Price: {price}</p>
            </div>

            <button onClick={()=>handleHire(player)} className="btn-hire">
                <h2>Hire</h2>
            </button>
            
            
               
        </div>
    );
};

export default PlayerList;