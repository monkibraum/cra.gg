import key from './apikey'


export const findSummoner = async (name) => {
   const first = await fetch(`https://cors-anywhere.herokuapp.com/https://kr.api.riotgames.com/lol/summoner/v3/summoners/by-name/${name}?api_key=${key}`) 
   const data =  await first.json();
   return data.id
}
export const findInfo = async (id) => {
    const first = await fetch(`https://cors-anywhere.herokuapp.com/https://kr.api.riotgames.com/lol/league/v3/positions/by-summoner/${id}?api_key=${key}`) 
    const data =  await first.json();
    return data[0]
}
export const findSummonerInfo = async (id) => {
    const first = await fetch(`https://cors-anywhere.herokuapp.com/https://kr.api.riotgames.com/lol/summoner/v3/summoners/${id}?api_key=${key}`) 
    const data =  await first.json();
    return data

}
export const findAccountId = async (name) => {
    const first = await fetch(`https://cors-anywhere.herokuapp.com/https://kr.api.riotgames.com/lol/summoner/v3/summoners/by-name/${name}?api_key=${key}`);
    const data = await first.json();
    return data.accountId;
}

export const allMatchList = async (accountId) => {    
  const first = await fetch(`https://cors-anywhere.herokuapp.com/https://kr.api.riotgames.com/lol/match/v3/matchlists/by-account/${accountId}?endIndex=10&api_key=${key}`);
  const data = await first.json();
  return data.matches;
}

export const getMatchByGameId = async (gameId) => {    
  const first = await fetch(`https://cors-anywhere.herokuapp.com/https://kr.api.riotgames.com/lol/match/v3/matches/${gameId}?api_key=${key}`);
  const data = await first.json();
  return data;
}

export const ChampionName = (matchChampionId) => {    
    var cham = "";
    switch(matchChampionId) {
        case   17 :
        cham = '티모개년';
    }
    const data = cham;
    return data;
}






