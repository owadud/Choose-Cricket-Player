import React from 'react';
import './Hire.css';
const Hire = ({ hire,clearCart,handleRandomPlayers}) => {
    
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


        </div>
    );
};

export default Hire;