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
        // console.log(player);
        const newHire =[...hire,player];
        setHire(newHire);
    }


    return (
        <div className='player'>
           <div className="player-container">
                    {
                        players.map(player=><PlayerList key={player.id} player={player} 
                        handleHire={handleHire}>


                        </PlayerList>)
                    }
           </div>
           <div className="selectedPlayer">
                    <Hire hire={hire}></Hire>
           </div>

        </div>
    );
};

export default Player;