import React, { Component } from 'react';
import Moment from 'react-moment';
import propTypes from 'prop-types';


   

class Match extends Component {


ChampionName = (matchChampionId) => {    
    var cham = "";
    switch(matchChampionId) {
        case 1:
            cham = "애니";
            return cham;
        case 2:
            cham = "올라프";
            return cham;
        case 3:
            cham = "갈리오";
            return cham;
        case 4:
            cham = "트위스트페이스트";
            return cham;
        case 5:
            cham = "신짜오";
            return cham;
        case 6:
            cham = "우르고";
            return cham;
        case 7:
            cham = "르블랑";
            return cham;
        case 8:
            cham = "블라디미르";
            return cham;
        case 9:
            cham = "피들스틱";
            return cham;
        case 10:
            cham = "케일";
            return cham;
        case 11:
            cham = "마스터이";
            return cham;
        case 12:
            cham = "알리스타";
            return cham;
        case 13:
            cham = "라이즈";
            return cham;
        case 14:
            cham = "사이온";
            return cham;
        case 15:
            cham = "시비르";
            return cham;
        case 16:
            cham = "소라카";
            return cham;
        case 17:
            cham = "티모씹년";
            return cham;
        case 18:
            cham = "트리스타나";
            return cham;
        case 19:
            cham = "워윅";
            return cham;
        case 20:
            cham = "누누";
            return cham;
        case 21:
            cham = "미스포츈";
            return cham;
        case 22:
            cham = "애쉬";
            return cham;
        case 23:
            cham = "트린다미어";
            return cham;
        case 24:
            cham = "잭스";
            return cham;
        case 25:
            cham = "모르가나";
            return cham;
        case 26:
            cham = "질리언";
            return cham;
        case 27:
            cham = "신지드";
            return cham;
        case 28:
            cham = "이블린";
            return cham;
        case 29:
            cham = "트위치";
            return cham;
        case 30:
            cham = "카서스";
            return cham;
        case 31:
            cham = "초가스";
            return cham;
        case 32:
            cham = "아무무";
            return cham;
        case 33:
            cham = "람머스";
            return cham;
        case 34:
            cham = "애니비아";
            return cham;
        case 35:
            cham = "샤코";
            return cham;
        case 36:
            cham = "문도박사";
            return cham;
        case 37:
            cham = "소나";
            return cham;
        case 38:
            cham = "카사딘";
            return cham;
        case 39:
            cham = "이렐리아";
            return cham;
        case 40:
            cham = "잔나";
            return cham;
        case 41:
            cham = "갱플랭크";
            return cham;
        case 42:
            cham = "코르키";
            return cham;
        case 43:
            cham = "카르마";
            return cham;
        case 44:
            cham = "타릭";
            return cham;
        case 45:
            cham = "베이가";
            return cham;
        case 48:
            cham = "트런들";
            return cham;
        case 50:
            cham = "스웨인";
            return cham;
        case 51:
            cham = "케이틀린";
            return cham;
        case 53:
            cham = "블리츠크랭크";
            return cham;
        case 54:
            cham = "말파이트";
            return cham;
        case 55:
            cham = "카타리나";
            return cham;
        case 56:
            cham = "녹턴";
            return cham;
        case 57:
            cham = "마오카이";
            return cham;
        case 58:
            cham = "레넥톤";
            return cham;
        case 59:
            cham = "자르반4살";
            return cham;
        case 61:
            cham = "오리아나";
            return cham;
        case 62:
            cham = "오공";
            return cham;
        case 63:
            cham = "브랜드";
            return cham;
        case 64:
            cham = "장님";
            return cham;
        case 67:
            cham = "베인충";
            return cham;
        case 68:
            cham = "럼블";
            return cham;
        case 69:
            cham = "카시오페아";
            return cham;
        case 72:
            cham = "스카너";
            return cham;
        case 74:
            cham = "하이머딩거";
            return cham;
        case 75:
            cham = "나서스";
            return cham;
        case 76:
            cham = "니달리";
            return cham;
        case 77:
            cham = "우디르";
            return cham;
        case 78:
            cham = "뽀삐";
            return cham;
        case 79:
            cham = "그라가스";
            return cham;
        case 80:
            cham = "빵만드는년";
            return cham;
        case 81:
            cham = "이즐이얼";
            return cham;
        case 82:
            cham = "모데카이저";
            return cham;
        case 83:
            cham = "고인";
            return cham;
        case 84:
            cham = "아칼리개사기";
            return cham;
        case 85:
            cham = "케넨";
            return cham;
        case 86:
            cham = "가렌";
            return cham;
        case 89:
            cham = "레오나";
            return cham;
        case 90:
            cham = "공허충애비";
            return cham;
        case 91:
            cham = "탈론";
            return cham;
        case 92:
            cham = "리븐";
            return cham;
        case 96:
            cham = "코그모";
            return cham;
        case 98:
            cham = "쉔";
            return cham;
        case 99:
            cham = "럭스";
            return cham;
        case 101:
            cham = "제라스";
            return cham;
        case 102:
            cham = "쉬바나";
            return cham;
        case 103:
            cham = "아리";
            return cham;
        case 104:
            cham = "그레이브즈";
            return cham;
        case 105:
            cham = "피즈";
            return cham;
        case 106:
            cham = "볼리베어";
            return cham;
        case 107:
            cham = "렝가";
            return cham;
        case 110:
            cham = "바루스";
            return cham;
        case 111:
            cham = "노틸러스";
            return cham;
        case 112:
            cham = "빅토르";
            return cham;
        case 113:
            cham = "세주아니";
            return cham;
        case 114:
            cham = "피오라";
            return cham;
        case 115:
            cham = "직스";
            return cham;
        case 117:
            cham = "룰루";
            return cham;
        case 119:
            cham = "드레이븐";
            return cham;
        case 120:
            cham = "헤카림";
            return cham;
        case 122:
            cham = "다리우스시발룐";
            return cham;
        case 126:
            cham = "제이스";
            return cham;
        case 131:
            cham = "다이애나";
            return cham;
        case 143:
            cham = "자이라";
            return cham;
    }
    const data = cham;
    return data;
}



render() {
    const {champion, gameId, queue, timestamp} = this.props;
    
    const parsed = new Date(timestamp).toISOString() ;
    return (
        <div>
            <span>{gameId}</span> <span>{this.ChampionName(champion)}</span> <span>{queue}</span> <Moment locale="ko"fromNow>{parsed}</Moment>
        </div>
    );
   }
}
  
 export default Match;