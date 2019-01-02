import React, { Component } from 'react';
import Moment from 'react-moment';
import {getQueueTypeById, getChampionNameById} from './api/api';

const Match = (props) => {

    const { item } = props;
    const { champion , timestamp, detail } = item;
    const championName = getChampionNameById(champion);
    const chamKR = championName[0];
    const chamEN = championName[1];
    const queueType = getQueueTypeById(item.queue)
    const match = detail.participants.find( parti => champion === parti.championId )
    const kills = match? match.stats.kills : 0;
    const deaths = match? match.stats.deaths : 0;
    const assists = match? match.stats.assists : 0;
    const myTeam = match? match.teamId : null;
    const win = detail.teams.find( team => team.teamId == myTeam )? detail.teams.find( team => team.teamId == myTeam ).win : "Fail";
    const parsedDate = new Date(timestamp).toISOString();

    return (
        <div className="search_item small" 
        style={win === 'Win' ? {backgroundColor: "#aacfe9"}: {backgroundColor: "#e2b6b3"} }>
            <div className="chamProfile">
                <img src={`//opgg-static.akamaized.net/images/lol/champion/${chamEN}.png?image=w_140`} />
            </div>
            <div className = "matchResult">
            <div>
            <span style={{marginRight:10}}>{chamKR}</span>  <span> {kills} / <span style={{color:"red"}}>{deaths}</span> / {assists}</span> <span className="moment"><Moment locale="ko"fromNow>{parsedDate}</Moment></span>
            </div>
                
                <div style ={win === 'Win'?{float:'left', color:'blue'} : {float:'left', color: 'red'}}>{win === 'Win'? '승리' : '패배' }</div>
                <div style ={{float :'right', color:'#666'}}>{ queueType }</div>
            </div>     
        </div>
    );
}
  
 export default Match;