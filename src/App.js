import React, { Component } from 'react';
import { findSummoner, findTier } from './config/api';
import Match from './Match';

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      name: '',
      tier : '',
      character : '',
    }
  }

  async componentDidMount(){
    const id = await findSummoner('룰링머신');
    const tier = await findTier(id);

  }

  onChangeName = (e) => {
    this.setState( { 
      name : e.target.value
    })
  }

  search = async () => {
    this._matchList();

    const id = await findSummoner(this.state.name);
    const tier = await findTier(id);
    this.setState({ tier : tier})
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
    this.setState({ matchList })
    // console.log(this.state.matchList)
  }

  render() {
    return (
      <div className="App">

        <input onChange = {this.onChangeName}/>
        <button onClick={this.search}>검색</button>

        <div> 나의 티어는 {this.state.tier} 입니다 </div>
        {/* <div> 내가 가장 최근에 플레이한 캐릭터는 {this.state.character} 입니다 </div> */}
        <div>최근 전적보기</div>        
          {this.state.matchList ? this._renderList() : '?'}
      </div>
    );
  }
}

export default App;
