import React,{ useState } from 'react';
import './App.css';
import Search from "./components/Search";
import Detail from "./components/Detail";

const App = () => {
  const [avatar_url, setAvatarUrl] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [public_repos, setPublicRepos] = useState("");
  const [followers, setFollowers] = useState("");
  const [following, setFollowing] = useState("");
  const [error, setError] = useState("");
  const [repoName, setRepoName] = useState([]);
  const [followerLogin, setFollowerLogin] = useState([]);
  const [followingLogin, setFollowingLogin] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const getProfileInfo = async(e) => {
    e.preventDefault();
    const userName = e.target.elements.search.value;
    const api_call = await fetch('https://api.github.com/users/'+userName);
    const data = await api_call.json();
    if(api_call.status===200 && userName){
      setIsLoaded(true);
      setAvatarUrl(data.avatar_url);
      setName(data.name);
      setCompany(data.company);
      setPublicRepos(data.public_repos);
      setFollowers(data.followers);
      setFollowing(data.following);
      setError("");
    }else if(api_call.status!==200 && userName){
      setIsLoaded(true);
      setError("Oops something went wrong");
    }else{
      setIsLoaded(true);
      setError("Please enter the values");
    }
    if(api_call.status===200){
      getUserRepo(userName);
      getUserFollowers(userName);
      getUserFollowing(userName);
    }
  }
  const getUserRepo= async(userName) => {
    const api_call = await fetch('https://api.github.com/users/'+userName+'/repos');
    const data = await api_call.json();
    let repoArr = [];
    for(let i=0;i<data.length;i++){
      repoArr.push(data[i].name);
    }
    setRepoName(repoArr);
  }
  const getUserFollowers= async(userName) => {
    const api_call = await fetch('https://api.github.com/users/'+userName+'/followers');
    const data = await api_call.json();
    let followerArr = [];
    for(let i=0;i<data.length;i++){
      followerArr.push(data[i].login);
    }
    setFollowerLogin(followerArr);
  }
  const getUserFollowing= async(userName) => {
    const api_call = await fetch('https://api.github.com/users/'+userName+'/following');
    const data = await api_call.json();
    let followingArr = [];
    for(let i=0;i<data.length;i++){
      followingArr.push(data[i].login);
    }
    setFollowingLogin(followingArr);
  }
  return (
    <div className="App container">
      <Search getProfileInfo={getProfileInfo}/>
      <Detail avatar_url={avatar_url}
          name={name}
          company={company}
          public_repos={public_repos}
          followers={followers}
          following={following}
          error={error}
          isLoaded={isLoaded}
          repoName={repoName}
          followerLogin={followerLogin}
          followingLogin={followingLogin}/>
    </div>
    );
}

export default App;
