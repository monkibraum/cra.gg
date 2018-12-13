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

