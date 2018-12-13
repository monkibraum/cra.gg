import React, { Component } from 'react';
import Moment from 'react-moment';
import propTypes from 'prop-types';

function Match({gameId, champion, queue, timestamp}) {
    // const { classes } = props;
    var parsed = new Date(timestamp).toISOString() ;
    return (
        <div>
            <span>{gameId}</span> <span>{champion}</span> <span>{queue}</span> <Moment locale="ko"fromNow>{parsed}</Moment>
        </div>
    );
  }

  Match.propTypes = {
    gameId: propTypes.number.isRequired,
    champion: propTypes.number.isRequired,
    queue: propTypes.number.isRequired,
    timestamp: propTypes.number.isRequired
}
  
 export default Match;