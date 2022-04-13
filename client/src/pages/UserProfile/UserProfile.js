import React, { Component, Route, useRef } from "react";
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

  handleChange1(e) {
    let isChecked = e.target.checked;
    if(isChecked === true){
      console.log("User Selected Vegan")
    }else {
      console.log("User unselected Vegan")
    }
  }
  handleChange2(e) {
    let isChecked = e.target.checked;
    if(isChecked === true){
      console.log("User Selected Dairy-Free")
    } else {
      console.log("User unselected Dairy-Free")
    }
  }
  handleChange3(e) {
    let isChecked = e.target.checked;
    if(isChecked === true){
      console.log("User Selected Gluten-Free")
    }else {
      console.log("User unselected Gluten-Free")
    }
  }
  handleChange4(e) {
    let isChecked = e.target.checked;
    if(isChecked === true){
      console.log("User Selected Wheat-Free")
    }else {
      console.log("User unselected Wheat-Free")
    }
  }
  handleChange5(e) {
    let isChecked = e.target.checked;
    if(isChecked === true){
      console.log("User Selected Vegetarian")
    }else {
      console.log("User unselected Vegetarian")
    }
  }
  handleChange6(e) {
    let isChecked = e.target.checked;
    if(isChecked === true){
      console.log("User Selected Paleo")
    }else {
      console.log("User unselected Paleo")
    }
  }
  handleChange7(e) {
    let isChecked = e.target.checked;
    if(isChecked === true){
      console.log("User Selected Alchol-Free")
    }else {
      console.log("User unselected Alchol-Free")
    }
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
              <input type="checkbox" id="dietNeeds" value="Vegan" onChange={this.handleChange1} />Vegan
              <input type="checkbox" id="dietNeeds" value="Dairy-Free" onChange={this.handleChange2} />Dairy-Free
              <input type="checkbox" id="dietNeeds" value="Gluten-Free" onChange={this.handleChange3} />Gluten-Free
              <input type="checkbox" id="dietNeeds" value="Wheat-Free" onChange={this.handleChange4} />Wheat-Free
              <input type="checkbox" id="dietNeeds" value="Vegetarian" onChange={this.handleChange5}  />Vegetarian
              <input type="checkbox" id="dietNeeds" value="Paleo" onChange={this.handleChange6} />Paleo
              <input type="checkbox" id="dietNeeds" value="Alcohol-Free" onChange={this.handleChange7}/>Alcohol-Free
             

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
