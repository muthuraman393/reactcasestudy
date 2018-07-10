import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import {fetchPosts/*,fetchPostsIfNeeded*/} from "../actions";


class HeroesList extends Component {
  constructor(props) {
    super(props)
    this.handleRefreshClick = this.handleRefreshClick.bind(this)
  }
  static getdefaultheroeslist() {
    return [
      { id: 11, name: "Mr. Nice" },
      { id: 12, name: "Narco" },
      { id: 13, name: "Bombasto" },
      { id: 14, name: "Celeritas" },
      { id: 15, name: "Magneta" },
      { id: 16, name: "RubberMan" },
      { id: 17, name: "Dynama" },
      { id: 18, name: "Dr IQ" },
      { id: 19, name: "Magma" },
      { id: 20, name: "Tornado" }
    ];
  }

componentDidMount=()=>{
  const { dispatch} = this.props
  fetchPosts(dispatch)
}


handleRefreshClick(e) {
  e.preventDefault()
  const { dispatch } = this.props
  //dispatch(invalidateSubreddit())
  fetchPosts(dispatch)
}
  render() {
    const heoresarr = HeroesList.getdefaultheroeslist();
    const {
      isfetching,
      isreceivedat,
      heroitems
    } = this.props;
    const isempty = heroitems.length === 0
    return (
      <div>
        <h2>Heroes List Page  is Last Updated at {new Date(isreceivedat).toLocaleTimeString()}.{" "}</h2>
        <button onClick={this.handleRefreshClick}>
              Refresh
            </button>
            {isempty ? (<h1>Loading</h1>):
            (<ul className="heroes">
          {heroitems.map(i => {
            return (
              <li key={i.id}>
                <Link to={`/hero/${i.id}`}>
                  <span className="badge">{i.ups} </span>
                  {i.name} - {i.id}
                </Link>
                <button className="delete" title="delete hero">
                  x
                </button>
              </li>
            );
          })}
        </ul>)}
      </div>
    );
  }
}
const mapStateToProps =(state)=>{
const {
  isfetching,
  isreceivedat,
  heroeslist: heroitems
} = state.herolistreducer ||
 {
  isfetching:true,
  isreceivedat:'',
  heroeslist:[]
};
return{
  isfetching,
  isreceivedat,
  heroitems
}
}

/*const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => {
          //console.log(location);
          dispatch(fetchPosts);
      }
  };
};*/
export default connect(mapStateToProps/*,mapDispatchToProps*/)(HeroesList);
