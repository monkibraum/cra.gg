import React, { Component } from 'react';
import { 
  getSummonerIdByName, 
  getSummonerPosition, 
  getSummonerDataById, 
  getAccountIdByName, 
  getRecentMatches, 
  getMatchByGameId
 } from './api/api';
import './App.css';
import { Dots } from 'react-activity';
import 'react-activity/dist/react-activity.css';
import Match from './match';
import 'moment/locale/ko';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      resultName: '',
      userSearching: false,
      matchSearching : false,
      hasResult : false,
      matchList : [],
    }
  }

  onChangeName = (e) => {
    this.setState({
      name: e.target.value,
    })
  }

  onKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      e.stopPropagation();
      this.search();
    }
  }

  search = () => {
    this.setState({
      userSearching: true,
    }, async () => {

      const id = await getSummonerIdByName(this.state.name);
      if(!id){
        this.setState({
          userSearching: false
        })
        return alert(`${this.state.name} 님은 못찾겠어요~ ㅎ;;`)
      }
      this._getMatchList(this.state.name);     
      const position = await getSummonerPosition(id);
      const summonerMeta = await getSummonerDataById(id);

      this.setState({
        resultName : this.state.name,
        tier: position.tier,
        wins: position.wins,
        losses: position.losses,
        profile_img: summonerMeta.profileIconId,
        level: summonerMeta.summonerLevel,
        userSearching: false,
        hasResult : true,
  
      })
  
    })
  }

  _renderMatchList = () => {

    const matchList = this.state.matchList.map((item) => {
      return <Match
        key = {item.gameId}
        item = {item}
        />
    })
    return matchList
  }

  _getMatchList = async (name) => {

    this.setState({ matchSearching: true })

    const accountId = await getAccountIdByName(name);
    const matchList = await getRecentMatches(accountId);

    let matchListWithDetail = [];

    await Promise.all( matchList.map(async match => {
      const data = await getMatchByGameId(match.gameId);
      const combine = { ...match, detail: data };
      matchListWithDetail.push(combine);
    }))


    this.setState( { matchList : matchListWithDetail.sort((a,b) => b.timestamp - a.timestamp), matchSearching: false })

  }

  render() {
    const sum = this.state.wins + this.state.losses;
    const winning_rate = ((this.state.wins / sum ) * 100).toFixed(0);
    return (

      <div className="App">
        <h1>
          CRA.gg
        </h1>
        <div className="input_box">
          <input type="text" onChange={this.onChangeName} onKeyPress={this.onKeyPress} placeholder="소환사명" />
          
          {this.state.userSearching?
            <Dots color={'#fff'} size = {30} />
            :
            <div className={this.state.searching? 'search_result' : 'search_result active'}>

              {this.state.hasResult?
              <div className="search_item">
                <ul>
                  <li className="search_item_left">
                    <h4>{this.state.tier}</h4>
                    <h3>{this.state.resultName}<span className="lv"> Lv.{this.state.level}</span></h3>
                    <p>{this.state.wins}승 {this.state.losses}패 ({winning_rate}%)</p>
                  </li>
                  <li className="search_item_right">
                    <div className="search_item_profile" style={{ backgroundImage: `url(//opgg-static.akamaized.net/images/profile_icons/profileIcon${this.state.profile_img}.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center' }} ></div>
                  </li>
                </ul>
              </div> : null
              }

              { !this.state.matchSearching? this._renderMatchList() : <Dots color={'#fff'} size = {30} /> }

            </div>
          }
          
        </div>

      </div>
    )
  }

}

export default App;
