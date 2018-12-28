import React, { Component } from 'react';
import Moment from 'react-moment';
import propTypes from 'prop-types';


   

class Match extends Component {


ChampionName = (matchChampionId) => {    
    var cham = [];
    switch(matchChampionId) {
        case 1:
            cham[0] = "애니";
            cham[1] = "Annie";
            return cham;
        case 2:
            cham[0] = "올라프";
            cham[1] = "Olaf";
            return cham;
        case 3:
            cham[0] = "갈리오";
            cham[1] = "Galio";
            return cham;
        case 4:
            cham[0] = "트위스트페이스트";
            cham[1] = "TwistedFate";
            return cham;
        case 5:
            cham[0] = "신짜오";
            cham[1] = "XinZhao";
            return cham;
        case 6:
            cham[0] = "우르고자";
            cham[1] = "Urgot";
            return cham;
        case 7:
            cham[0] = "르블랑";
            cham[1] = "Urgot";
            return cham;
        case 8:
            cham[0] = "블라디미르";
            cham[1] = "Vladimir"; 
 			 return cham;
        case 9:
            cham[0] = "피들스틱";
            cham[1] = "Fiddlesticks"; 
 			 return cham;
        case 10:
            cham[0] = "케일";
            cham[1] = "Kayle"; 
 			 return cham;
        case 11:
            cham[0] = "마스터이";
            cham[1] = "MasterYi"; 
 			 return cham;
        case 12:
            cham[0] = "알리스타";
            cham[1] = "Alistar"; 
 			 return cham;
        case 13:
            cham[0] = "라이즈";
            cham[1] = "Ryze"; 
 			 return cham;
        case 14:
            cham[0] = "사이온";
            cham[1] = "Sion"; 
 			 return cham;
        case 15:
            cham[0] = "시비르";
            cham[1] = "Sivir"; 
 			 return cham;
        case 16:
            cham[0] = "소라카";
            cham[1] = "Soraka";
            return cham;
        case 17:
            cham[0] = "티모씹년";
            cham[1] = "Teemo"; 
 			 return cham;
        case 18:
            cham[0] = "트리스타나";
            cham[1] = "Tristana"; 
 			 return cham;
        case 19:
            cham[0] = "워윅";
            cham[1] = "Warwick"; 
 			 return cham;
        case 20:
            cham[0] = "누누";
            cham[1] = "Nunu"; 
 			 return cham;
        case 21:
            cham[0] = "미스포츈";
            cham[1] = "Miss Fortune"; 
 			 return cham;
        case 22:
            cham[0] = "애쉬";
            cham[1] = "Ashe"; 
 			 return cham;
        case 23:
            cham[0] = "트린다미어";
            cham[1] = "Tryndamere"; 
 			 return cham;
        case 24:
            cham[0] = "잭스";
            cham[1] = "Jax"; 
 			 return cham;
        case 25:
            cham[0] = "모르가나";
            cham[1] = "Morgana"; 
 			 return cham;
        case 26:
            cham[0] = "질리언";
            cham[1] = "Zilean"; 
 			 return cham;
        case 27:
            cham[0] = "신지드";
            cham[1] = "Singed"; 
 			 return cham;
        case 28:
            cham[0] = "이블린";
            cham[1] = "Evelynn"; 
 			 return cham;
        case 29:
            cham[0] = "트위치";
            cham[1] = "Twitch"; 
 			 return cham;
        case 30:
            cham[0] = "카서스";
            cham[1] = "Karthus"; 
 			 return cham;
        case 31:
            cham[0] = "초가스";
            cham[1] = "Chogath"; 
 			 return cham;
        case 32:
            cham[0] = "아무무";
            cham[1] = "Amumu"; 
 			 return cham;
        case 33:
            cham[0] = "람머스";
            cham[1] = "Rammus"; 
 			 return cham;
        case 34:
            cham[0] = "애니비아";
            cham[1] = "Anivia"; 
 			 return cham;
        case 35:
            cham[0] = "샤코";
            cham[1] = "Shaco"; 
 			 return cham;
        case 36:
            cham[0] = "문도박사";
            cham[1] = "DrMundo"; 
 			 return cham;
        case 37:
            cham[0] = "소나";
            cham[1] = "Sona"; 
 			 return cham;
        case 38:
            cham[0] = "카사딘";
            cham[1] = "Kassadin"; 
 			 return cham;
        case 39:
            cham[0] = "이렐리아";
            cham[1] = "Irelia"; 
 			 return cham;
        case 40:
            cham[0] = "잔나";
            cham[1] = "Janna"; 
 			 return cham;
        case 41:
            cham[0] = "갱플랭크";
            cham[1] = "Gangplank"; 
 			 return cham;
        case 42:
            cham[0] = "코르키";
            cham[1] = "Corki"; 
 			 return cham;
        case 43:
            cham[0] = "카르마";
            cham[1] = "Karma"; 
 			 return cham;
        case 44:
            cham[0] = "타릭";
            cham[1] = "Taric"; 
 			 return cham;
        case 45:
            cham[0] = "베이가";
            cham[1] = "Veigar"; 
 			 return cham;
        case 48:
            cham[0] = "트런들";
            cham[1] = "Trundle"; 
 			 return cham;
        case 50:
            cham[0] = "스웨인";
            cham[1] = "Swain"; 
 			 return cham;
        case 51:
            cham[0] = "케이틀린";
            cham[1] = "Caitlyn"; 
 			 return cham;
        case 53:
            cham[0] = "블리츠크랭크";
            cham[1] = "Blitzcrank"; 
 			 return cham;
        case 54:
            cham[0] = "말파이트";
            cham[1] = "Malphite"; 
 			 return cham;
        case 55:
            cham[0] = "카타리나";
            cham[1] = "Katarina"; 
 			 return cham;
        case 56:
            cham[0] = "녹턴";
            cham[1] = "Nocturne"; 
 			 return cham;
        case 57:
            cham[0] = "마오카이";
            cham[1] = "Maokai"; 
 			 return cham;
        case 58:
            cham[0] = "레넥톤";
            cham[1] = "Renekton"; 
 			 return cham;
        case 59:
            cham[0] = "자르반4살";
            cham[1] = "JarvanIV"; 
 			 return cham;
        case 61:
            cham[0] = "오리아나";
            cham[1] = "Orianna"; 
 			 return cham;
        case 62:
            cham[0] = "오공";
            cham[1] = "Wukong"; 
 			 return cham;
        case 63:
            cham[0] = "브랜드";
            cham[1] = "Brand"; 
 			 return cham;
        case 64:
            cham[0] = "장님";
            cham[1] = "LeeSin"; 
 			 return cham;
        case 67:
            cham[0] = "베인충";
            cham[1] = "Vayne"; 
 			 return cham;
        case 68:
            cham[0] = "럼블";
            cham[1] = "Rumble"; 
 			 return cham;
        case 69:
            cham[0] = "카시오페아";
            cham[1] = "Cassiopeia"; 
 			 return cham;
        case 72:
            cham[0] = "스카너";
            cham[1] = "Skarner"; 
 			 return cham;
        case 74:
            cham[0] = "하이머딩거";
            cham[1] = "Heimerdinger"; 
 			 return cham;
        case 75:
            cham[0] = "나서스";
            cham[1] = "Nasus"; 
 			 return cham;
        case 76:
            cham[0] = "니달리";
            cham[1] = "Nidalee"; 
 			 return cham;
        case 77:
            cham[0] = "우디르";
            cham[1] = "Udyr"; 
 			 return cham;
        case 78:
            cham[0] = "뽀삐";
            cham[1] = "Poppy"; 
 			 return cham;
        case 79:
            cham[0] = "그라가스";
            cham[1] = "Gragas"; 
 			 return cham;
        case 80:
            cham[0] = "빵만드는년";
            cham[1] = "Pantheon"; 
 			 return cham;
        case 81:
            cham[0] = "이즐이얼";
            cham[1] = "Ezreal"; 
 			 return cham;
        case 82:
            cham[0] = "모데카이저";
            cham[1] = "Mordekaiser"; 
 			 return cham;
        case 83:
            cham[0] = "고인";
            cham[1] = "Yorick"; 
 			 return cham;
        case 84:
            cham[0] = "아칼리개사기";
            cham[1] = "Akali"; 
 			 return cham;
        case 85:
            cham[0] = "케넨";
            cham[1] = "Kennen"; 
 			 return cham;
        case 86:
            cham[0] = "가렌";
            cham[1] = "Garen"; 
 			 return cham;
        case 89:
            cham[0] = "레오나";
            cham[1] = "Leona"; 
 			 return cham;
        case 90:
            cham[0] = "공허충애비";
            cham[1] = "Malzahar"; 
 			 return cham;
        case 91:
            cham[0] = "탈론";
            cham[1] = "Talon"; 
 			 return cham;
        case 92:
            cham[0] = "리븐";
            cham[1] = "Riven"; 
 			 return cham;
        case 96:
            cham[0] = "코그모";
            cham[1] = "KogMaw"; 
 			 return cham;
        case 98:
            cham[0] = "쉔";
            cham[1] = "Shen"; 
 			 return cham;
        case 99:
            cham[0] = "럭스";
            cham[1] = "Lux"; 
 			 return cham;
        case 101:
            cham[0] = "제라스";
            cham[1] = "Xerath"; 
 			 return cham;
        case 102:
            cham[0] = "쉬바나";
            cham[1] = "Shyvana"; 
 			 return cham;
        case 103:
            cham[0] = "아리";
            cham[1] = "Ahri"; 
 			 return cham;
        case 104:
            cham[0] = "그레이브즈";
            cham[1] = "Graves"; 
 			 return cham;
        case 105:
            cham[0] = "피즈";
            cham[1] = "Fizz"; 
 			 return cham;
        case 106:
            cham[0] = "볼리베어";
            cham[1] = "Volibear"; 
 			 return cham;
        case 107:
            cham[0] = "렝가";
            cham[1] = "Rengar"; 
 			 return cham;
        case 110:
            cham[0] = "바루스";
            cham[1] = "Varus"; 
 			 return cham;
        case 111:
            cham[0] = "노틸러스";
            cham[1] = "Nautilus"; 
 			 return cham;
        case 112:
            cham[0] = "빅토르";
            cham[1] = "dViktordddd"; 
 			 return cham;
        case 113:
            cham[0] = "세주아니";
            cham[1] = "Sejuani"; 
 			 return cham;
        case 114:
            cham[0] = "피오라";
            cham[1] = "Fiora"; 
 			 return cham;
        case 115:
            cham[0] = "직스";
            cham[1] = "Ziggs"; 
 			 return cham;
        case 117:
            cham[0] = "룰루";
            cham[1] = "Lulu"; 
 			 return cham;
        case 119:
            cham[0] = "드레이븐";
            cham[1] = "Draven"; 
 			 return cham;
        case 120:
            cham[0] = "헤카림";
            cham[1] = "Hecarim"; 
 			 return cham;
        case 122:
            cham[0] = "다리우스시발룐";
            cham[1] = "Darius"; 
 			 return cham;
        case 126:
            cham[0] = "제이스";
            cham[1] = "Jayce"; 
 			 return cham;
        case 127:
            cham[0] = "리산드라";
            cham[1] = "Lissandra"; 
 			 return cham;
        case 131:
            cham[0] = "다이애나";
            cham[1] = "Diana"; 
 			 return cham;
        case 133:
            cham[0] = "퀸";
            cham[1] = "Quinn"; 
 			 return cham;
        case 134:
            cham[0] = "신드라";
            cham[1] = "Syndra"; 
 			 return cham;
        case 136:
            cham[0] = "아우렐리안솔";
            cham[1] = "AurelionSol"; 
 			 return cham;
        case 143:
            cham[0] = "자이라";
            cham[1] = "Zyra"; 
 			 return cham;
        case 150:
            cham[0] = "나르";
            cham[1] = "Gnar"; 
 			 return cham;
        case 154:
            cham[0] = "자크";
            cham[1] = "Zac"; 
 			 return cham;
        case 157:
            cham[0] = "야스오";
            cham[1] = "Yasuo"; 
 			 return cham;
        case 161:
            cham[0] = "벨코즈";
            cham[1] = "VelKoz"; 
 			 return cham;
        case 163:
            cham[0] = "탈리아";
            cham[1] = "Taliyah"; 
 			 return cham;
        case 164:
            cham[0] = "카밀";
            cham[1] = "Camille"; 
 			 return cham;
        case 201:
            cham[0] = "브라움";
            cham[1] = "Braum"; 
 			 return cham;
        case 202:
            cham[0] = "진";
            cham[1] = "Jhin"; 
 			 return cham;
        case 203:
            cham[0] = "킨드레드";
            cham[1] = "Kindred"; 
 			 return cham;
        case 222:
            cham[0] = "징크스";
            cham[1] = "Jinx"; 
 			 return cham;
        case 223:
            cham[0] = "탐켄치";
            cham[1] = "TahmKench"; 
 			 return cham;
        case 236:
            cham[0] = "루시안";
            cham[1] = "Lucian"; 
 			 return cham;
        case 236:
            cham[0] = "제드";
            cham[1] = "Zed"; 
 			 return cham;
        case 240:
            cham[0] = "클레드";
            cham[1] = "Kled"; 
 			 return cham;
        case 245:
            cham[0] = "에코";
            cham[1] = "Ekko"; 
 			 return cham;
        case 254:
            cham[0] = "바이";
            cham[1] = "Vi"; 
 			 return cham;
        case 266:
            cham[0] = "아트록스";
            cham[1] = "Aatrox"; 
 			 return cham;
        case 267:
            cham[0] = "나미";
            cham[1] = "Nami"; 
 			 return cham;
        case 268:
            cham[0] = "아지르";
            cham[1] = "Azir"; 
              return cham;
            //   "key":"350" 까지 검색함 http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json
        case 432:
            cham[0] = "바드";
            cham[1] = "Bard"; 
 			 return cham;
    }
    const data = cham;
    return data;
}



render() {
    const {championID, gameId, queue, timestamp} = this.props;

    const championFunc = this.ChampionName(championID);
    const chamKR = championFunc[0];
    const chamEN = championFunc[1];
    
    const parsed = new Date(timestamp).toISOString() ;
    return (
        <div className="search_item small">
            <div className="chamProfile"><img src={`//opgg-static.akamaized.net/images/lol/champion/${chamEN}.png?image=w_140`} /> </div>
            <span>{chamKR}</span> {championID} <span>{queue}</span> <span className="moment"><Moment locale="ko"fromNow>{parsed}</Moment></span>
        </div>
    );
   }
}
  
 export default Match;