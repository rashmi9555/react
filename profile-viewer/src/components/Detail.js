import React,{ useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import '../App.css';

const Detail = (props) => (
  <div className="detail">
    {props.isLoaded && !props.error && <div>
      <div className="row">
        <div className="col-md-12">&nbsp;</div>
      </div>
      <div className="row">
        <div className="col-md-3 detailImg">
          {props.avatar_url && <img src={props.avatar_url} alt="Avatar URL" className="thumbnail detailImgWid"/>}
        </div>
        <div className="col-md-8 deatilName">
          {props.name && <p>{props.name}</p>}
          {props.company && <p>{props.company}</p>}
        </div>
      </div>
                
  <Tabs defaultIndex={0}>
      <TabList>
        <Tab>Repositries({props.public_repos})</Tab>
        <Tab>Followers({props.followers})</Tab>
        <Tab>Followering({props.following})</Tab>
      </TabList>

      <TabPanel>
        {props.repoName.map(function(repoName, index){
          return <p className="repo" key={ index } onClick={() => this.getClickedRepoName(repoName)}>{repoName}</p>;
        })}
      </TabPanel>
      <TabPanel>
        {props.followerLogin.map(function(followerName, index){
          return <p className="repo" key={ index }>{followerName}</p>;
        })}
      </TabPanel>
      <TabPanel>
        {props.followingLogin.map(function(followingName, index){
          return <p className="repo" key={ index }>{followingName}</p>;
        })}
      </TabPanel>

    </Tabs>
  </div>}
  <div>{props.error && <p>{props.error}</p>}</div>
  </div>    
)

export default Detail;