import React, { Component } from 'react';
import { findSummoner, findInfo, findSummonerInfo, findAccountId, AllmatchList, ChampionName } from './config/api';
import './App.css';
import { Dots } from 'react-activity';
import 'react-activity/dist/react-activity.css';
import Match from './Match';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      tier: '',
      character: '',
    }
  }


  onChangeName = (e) => {
    this.setState({
      name: e.target.value,

    })
  }

  onKeyDown = (e) => {
    // 'keypress' event misbehaves on mobile so we track 'Enter' key via 'keydown' event
    if (e.key === 'Enter') {
      e.preventDefault();
      e.stopPropagation();
      this.search();
    }
  }


  search = async () => {
    this._matchList();
    
    this.setState({
      isLoaded: false,
      searching: false,
    })
    const id = await findSummoner(this.state.name);
    const info = await findInfo(id);
    console.log(id)
    const summoner = await findSummonerInfo(id);
    this.setState({
      tier: info.tier,
      wins: info.wins,
      losses: info.losses,
      profile_img: summoner.profileIconId,
      level: summoner.summonerLevel,
      isLoaded: true,
      searching: true,

    })
  }


  _renderList = () => {
    console.log('rendering : Listaaaaa')
    // console.log('렌더링해? 현재 state는? ' + this.state.matchList)
    const matchList = this.state.matchList.map((item) => {
      return <Match
        gameId={item.gameId}
        champion={item.champion}
        queue={item.queue}
        timestamp={item.timestamp} />
    })
    return matchList
  }

  _matchList = async () => {
    const accountId = await findAccountId(this.state.name);
    const matchList = await AllmatchList(accountId);
    const Champions = ChampionName(17);
    this.setState({ matchList })
    console.log(Champions)
  }

  render() {
    const sum = this.state.wins + this.state.losses;
    const average = this.state.wins / sum * 100;
    return (


      <div className="App">

        <div className="input_box">
          <input type="text" onChange={this.onChangeName} onKeyDown={this.onKeyDown} placeholder="소환사명" />
          

          {this.state.isLoaded == false ?
            <Dots color={'#fff'} />
            :
            <div className={this.state.searching == true ? 'search_result active' : 'search_result '}>
              <div className="search_item">
                <ul>
                  <li className="search_item_left">
                    <h4>{this.state.tier}</h4>
                    <h3>{this.state.name}<span className="lv"> Lv.{this.state.level}</span></h3>
                    <p>{this.state.wins}승 {this.state.losses}패 ({parseInt(average)}%)</p>
                  </li>
                  <li className="search_item_right">
                    <div className="search_item_profile" style={{ backgroundImage: `url(//opgg-static.akamaized.net/images/profile_icons/profileIcon${this.state.profile_img}.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center' }} ></div>
                  </li>
                </ul>
              </div>

              <div>최근 전적보기</div>
              {this.state.matchList ? this._renderList() : '?'}

            </div>
          }

          
        </div>

      </div>
    )
  }
 

}



export default App;
