import key from './apikey';


export const findSummoner = async (name) => {
  const first = await fetch(`https://cors-anywhere.herokuapp.com/https://kr.api.riotgames.com/lol/summoner/v3/summoners/by-name/${name}?api_key=${key}`) 
  const data = await first.json();
  return data.id
}

export const findTier = async (id) => {
    const first = await fetch(`https://cors-anywhere.herokuapp.com/https://kr.api.riotgames.com/lol/league/v3/positions/by-summoner/${id}?api_key=${key}`) 
    const data = await first.json();
    return data[0].tier
}

export const AllmatchList = async (accountId) => {    
  const first = await fetch(`https://cors-anywhere.herokuapp.com/https://kr.api.riotgames.com/lol/match/v3/matchlists/by-account/${accountId}?api_key=${key}`);
  const data = await first.json();
  return data.matches;
}

