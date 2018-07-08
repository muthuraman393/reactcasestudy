import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import {fetchPosts,fetchPostsIfNeeded} from "../actions";


class HeroesList extends Component {
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
  const { dispatch} = this.props;
  dispatch(fetchPostsIfNeeded());
}

  render() {
    const heoresarr = HeroesList.getdefaultheroeslist();
    const {
      isfetching,
      isreceivedat,
      heroeslist
    } = this.props;
    return (
      <div>{heroeslist}
        <h2>Heroes List Page </h2>
        <ul className="heroes">
          {heoresarr.map(i => {
            return (
              <li key={i.id}>
                <Link to={`/hero/${i.id}`}>
                  <span className="badge">{i.id} </span>
                  {i.name}
                </Link>
                <button className="delete" title="delete hero">
                  x
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
const mapStateToProps =(state)=>{
const {
  isfetching,
  isreceivedat,
  heroeslist: heroitems
} = state.herolistreducer;
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
