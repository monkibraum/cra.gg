import React, { Component } from 'react';
import { findSummoner, findTier } from './config/api';

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

    const id = await findSummoner(this.state.name);
    const tier = await findTier(id);
    this.setState({ tier : tier})
  }

  render() {
    return (
      <div className="App">

        <input onChange = {this.onChangeName}/>
        <button onClick={this.search}>검색</button>

        <div> 나의 티어는 {this.state.tier} 입니다 </div>
        {/* <div> 내가 가장 최근에 플레이한 캐릭터는 {this.state.character} 입니다 </div> */}
      </div>
    );
  }
}

export default App;
