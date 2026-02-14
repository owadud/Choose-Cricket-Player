import React from 'react';
import './Hire.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Hire = ({ hire,clearCart,handleRandomPlayers,handleRemove}) => {
    
    return (
        <div className='hire-container'>
            <h2>Want To Hire </h2>
           
            <div className="hired-player">

                <ul>
                    {
                        hire.map((addHire) =>


                            <div className="listed-player" key={addHire.id}>

                                <img src={addHire.picture} alt="" />
                                <p>Name: {addHire.name}</p>
                                <h3>Price: {addHire.price}</h3>
                                <button onClick={() => handleRemove(addHire.id)} className="btn-remove">
                                    <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                                </button>

                            </div>)

                    }
                </ul>

            </div>
            <div className="two-button">
                <button onClick={()=>handleRandomPlayers()}>
                    <p>Suggest Me One</p>
                </button>
                <button onClick={()=>clearCart(hire)}>
                    <p>Choose Again</p>
                </button>
               
               
            </div>
            <h1>Total Amount: ${hire.reduce((total, player) => total + parseInt(player.price.replace(/[^0-9]/g, '')), 0)}</h1> 


        </div>
    );
};

export default Hire;