import React, { useEffect, useState } from 'react';
import Hire from '../Hire/Hire';
import PlayerList from '../PlayerList/PlayerList';
import './Player.css';

const Player = () => {

    const [players,setPlayers]=useState([]);

    const [hire,setHire] = useState([]);

    useEffect(()=>{
        fetch('mockdata.json')
        .then(res=>res.json())
        .then(data=>setPlayers(data))
    },[])

    const handleHire = (player)=>{
         
        const newHire =[...hire,player];
        setHire(newHire);
    }

    const clearCart = ()=>{
       
        setHire([]);
    }

    const handleRandomPlayers=()=>{
        const len = hire.length;
        let randomPlayer =Math.floor(Math.random() * len);
        const newHire =hire[randomPlayer];
        setHire([newHire]);
    }

    const handleRemove = (playerId)=>{
        const updatedHire = hire.filter(player => player.id !== playerId);
        setHire(updatedHire);
    }

    return (
        <div className='player'>
           <div className="player-container">
                    {
                        players.filter(player => !hire.some(hiredPlayer => hiredPlayer.id === player.id))
                        .map(player=><PlayerList key={player.id} player={player} 
                        handleHire={handleHire}>

                        </PlayerList>)
                    }
           </div>
           <div className="selectedPlayer">
                    <Hire hire={hire} clearCart={clearCart} handleRandomPlayers={handleRandomPlayers} handleRemove={handleRemove}></Hire>
           </div>

        </div>
    );
};

export default Player;