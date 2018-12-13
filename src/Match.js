import React, { Component } from 'react';

import propTypes from 'prop-types';

function Match({gameId, champion, queue, timestamp}) {
    // const { classes } = props;
    return (
        <div>
            <span>{gameId}</span> <span>{champion}</span> <span>{queue}</span> <span>{timestamp}</span>
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