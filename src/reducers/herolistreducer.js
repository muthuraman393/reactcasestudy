import requestheroeslt from '../actions';

const herolistreducer = (state={isfetching:false,heroeslist:[],isreceivedat:''},action) =>{
    switch(action.type){
        case "REQUESTHEROESLT" :
         return {...state,
            isfetching:true
           };
        case "RECEIVEHEROESLT" :
         return {...state,
        isfetching:false,
        isreceivedat:action.heroeslastupdated,
        heroeslist: action.heroitems
        };
        default:
        return state;
    }
}

export default herolistreducer;