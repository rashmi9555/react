import React from 'react';
import './App.css';
import { render } from "react-dom";

import Search from "./components/Search";
import Detail from "./components/Detail";
import { async } from 'q';

class App extends React.Component {
  state = {
    avatar_url: undefined,
    error: undefined,
    repoName: [],
    followerLogin: [],
    followingLogin: [],
    isLoaded: false,
  }
  getProfileInfo = async(e) => {
    e.preventDefault();
    const userName = e.target.elements.search.value;
    const api_call = await fetch('https://api.github.com/users/'+userName);
    const data = await api_call.json();
    if(userName){
      this.setState({
        isLoaded: true,
        avatar_url: data.avatar_url,
        login: data.login,
        public_repos: data.public_repos,
        followers: data.followers,
        following: data.following,
        error: ""
      })
    }else{
      this.setState({
        isLoaded: true,
        avatar_url: undefined,
        login: undefined,
        public_repos: undefined,
        followers: undefined,
        following: undefined,
        error: "Please enter the values"
      })
    }
    this.getUserRepo(userName);
    this.getUserFollowers(userName);
    this.getUserFollowing(userName);
  }
  getUserRepo= async(userName) => {
    const api_call = await fetch('https://api.github.com/users/'+userName+'/repos');
    const data = await api_call.json();
    let repoArr = [];
    for(let i=0;i<data.length;i++){
      repoArr.push(data[i].name);
    }
    this.setState({
      repoName: repoArr
    })
  }
  getUserFollowers= async(userName) => {
    const api_call = await fetch('https://api.github.com/users/'+userName+'/followers');
    const data = await api_call.json();
    let followerArr = [];
    for(let i=0;i<data.length;i++){
      followerArr.push(data[i].login);
    }
    this.setState({
      followerLogin: followerArr
    })
  }
  getUserFollowing= async(userName) => {
    const api_call = await fetch('https://api.github.com/users/'+userName+'/following');
    const data = await api_call.json();
    let followingArr = [];
    for(let i=0;i<data.length;i++){
      followingArr.push(data[i].login);
    }
    this.setState({
      followingLogin: followingArr
    })
  }
  render(){
    return (
      <div className="App">
          <Search getProfileInfo={this.getProfileInfo}/>
          <Detail avatar_url={this.state.avatar_url}
                  login={this.state.login}
                  public_repos={this.state.public_repos}
                  followers={this.state.followers}
                  following={this.state.following}
                  error={this.state.error}
                  isLoaded={this.state.isLoaded}
                  repoName={this.state.repoName}
                  followerLogin={this.state.followerLogin}
                  followingLogin={this.state.followingLogin}/>
      </div>
    );
  }
}

export default App;
