import image from './vet.jpg'
import React from 'react';
function ProfilePhoto() {
    return (
        <img src={image} style ={{width: "200px", height : "250px" }} > </img>
    )
}
export default ProfilePhoto;