import React from 'react';
import Friend from './Friend';


export default function FriendsList(props) {
    var newList= props.friendsList.map((friend,index)=>{
        return(
        <div key={friend.name + "-" + index}>
        <Friend information={friend}/>
        </div>)
    });
    return (
        <div className="friendList">
            <div className="title"> My New List of Friends
            </div>
            {newList}
            
        </div>
    )
}
