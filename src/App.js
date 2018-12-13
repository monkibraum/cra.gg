import React, { Component } from 'react';
import { findSummoner, findInfo, findSummonerInfo } from './config/api';
import './App.css';
import { Dots } from 'react-activity';
import 'react-activity/dist/react-activity.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      name: '',
    }
  }

  onChangeName = (e) => {
    this.setState({
      name : e.target.value,
      
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
  

   search = async () =>{
    this.setState({
      isLoaded : false,
      searching: false,
    })
    const id = await findSummoner(this.state.name);
    const info = await findInfo(id);
    console.log(id)
    const summoner = await findSummonerInfo(id);
    this.setState({
      tier: info.tier,
      wins : info.wins,
      losses : info.losses,
      profile_img : summoner.profileIconId,
      level : summoner.summonerLevel,
      isLoaded : true,
      searching: true,
      
    })
  }
 
  render() {
    const sum = this.state.wins + this.state.losses;
    const average = this.state.wins /  sum * 100;
    return (
      

      <div className="App">

        <div className="input_box">
          <input  type="text" onChange= {this.onChangeName} onKeyDown={this.onKeyDown}  placeholder="소환사명"/>


          { this.state.isLoaded == false ? 
              <Dots color={'#fff'}/>
           :  
           <div className={ this.state.searching == true ? 'search_result active' : 'search_result '}>
           <div className="search_item">
             <ul>
               <li className="search_item_left">
                 <h4>{this.state.tier}</h4>
                 <h3>{this.state.name}<span className="lv"> Lv.{this.state.level}</span></h3>
                 <p>{this.state.wins}승 {this.state.losses}패 ({parseInt(average)}%)</p>
               </li>
               <li className="search_item_right">
                   <div className="search_item_profile" style={{backgroundImage: `url(//opgg-static.akamaized.net/images/profile_icons/profileIcon${this.state.profile_img}.jpg)`,  backgroundSize: 'cover', backgroundPosition:'center'}} ></div>
               </li>
             </ul>
           </div>
           </div> 
           }
          </div>
      </div>
    );
  }
}



export default App;
