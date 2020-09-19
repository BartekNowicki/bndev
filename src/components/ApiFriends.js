import React, { Component } from 'react';
import update from '../pics/update.svg';
const API = 'https://randomuser.me/api/?results=10&&inc=picture';
const firstFaceUrl = 'https://randomuser.me/api/portraits/thumb/women/1.jpg';

class ApiFriends extends Component {

    state = {
        friends: [{
        id: 1,
        url : firstFaceUrl,
        },{
        id: 2,
        url: firstFaceUrl,
        },{
        id: 3,
        url: firstFaceUrl,
        },{
        id:4,
        url: firstFaceUrl,
        },{
        id: 5,  
        url: firstFaceUrl,
        },{
        id: 6,  
        url: firstFaceUrl,
        },{
        id: 7,  
        url: firstFaceUrl,
        },{
        id: 8,  
        url: firstFaceUrl,
        },{
        id: 9,  
        url: firstFaceUrl,
        },{
        id: 10,  
        url: firstFaceUrl
        }]
      }

      componentDidMount() {
          this.fetchApiFriends();
      }

      fetchApiFriends = () => {
        let newFriendsArray = [];        

        fetch(API)
        .then(resp => {
            // console.log('the endpoint said: ', resp) 
            return resp})
        .then(resp => resp.json())
        .then(data => {
            for (let i = 0; i < data.results.length; i++) {
                newFriendsArray[i] = {id: i+1, url: data.results[i].picture.thumbnail};
                // console.log('the endpoint said: ', data.results[i].picture.thumbnail); 
                // console.log(newFriendsArray[i]);
            }
            this.setState(prevState => ({friends: newFriendsArray}));
         })
        .catch(err => console.log('błąd API, nie każdy obrazek miał miniaturkę!', err))
    }  
    
  render() {
    
    const facesArr = this.state.friends.map(item => <div key={item.id}><img src={item.url} className = "faceImg" alt="face"/></div>);
    
    return (
        <>
        <div className="apiFriends" onClick={() => {
            // console.log('click');
            this.fetchApiFriends();
        }}>
            <div className="apiFriendsHeader">
                    <p>meet my api friends</p>
                    <img src={update} className = "updateIcon" alt="updateIcon"/>
            </div>
            {facesArr}
        </div>
      </> 
      );
    }
}

export default ApiFriends;
