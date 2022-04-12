import React, { Component, Route } from "react";
import './UserProfile.css'

export class UserProfile extends Component {


  state = {
    profileImg: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
  }
  imageHandler = (e) => {
    const reader = new FileReader()
    reader.onload = () => {
      if (reader.readyState === 2) {
        this.setState({ profileImg: reader.result })
      }
    }
    reader.readAsDataURL(e.target.files[0])
  }
  preferencesHandler = (i) => {

  }


  render() {
    const { profileImg } = this.state
    return (
      <div className="page">
        <div className="container">
          <h1 className="heading">User Profile</h1>
          <div className="img-holder">
            <img src={profileImg} alt="" id="img" className="img" />
          </div>
          <input type="file" name="image-upload" id="input" accept="image/*" onChange={this.imageHandler} />
          <div className="label">
            <label htmlFor="input" className="image-upload">
              <i className="material-icons"></i>
              Choose your photo
            </label>
          </div>
          <div className="likes-container">

            <h1 className="heading">Preferences:</h1>
            <div className="preferences">
              <input type="checkbox" id="dietNeeds" value="Vegan" />Vegan
              <input type="checkbox" id="dietNeeds" value="Dairy-Free" />Dairy-Free
              <input type="checkbox" id="dietNeeds" value="Gluten-Free" />Gluten-Free
              <input type="checkbox" id="dietNeeds" value="Wheat-Free" />Wheat-Free
              <input type="checkbox" id="dietNeeds" value="Vegetarian" />Vegetarian
              <input type="checkbox" id="dietNeeds" value="Paleo" />Paleo
              <input type="checkbox" id="dietNeeds" value="Alcohol-Free" />Alcohol-Free


            </div>

          </div>

          <div className="birthday-container">

            <h1 className="heading">Birthday:</h1>
            <div className="birthday">
             <input type="date"></input>


            </div>

          </div>

        </div>

      </div>

    )

  }

}

export default UserProfile;
