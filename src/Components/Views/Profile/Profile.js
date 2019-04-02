import React, { Component } from 'react';
import styled from 'styled-components';
import Cookies from 'universal-cookie';

//Inits cookies
const cookies = new Cookies();

const ScProfile = styled.div`
    display: flex;
    font-size: 24px;
    
    margin: auto;
    text-align: center;
    justify-content: center;
    margin-top: 4%;
`;

const ScInput = styled.input`
`;

class Profile extends Component {
    constructor(props){

        super(props)
        this.state = {
            blank: false,
        }
    }

    //Handle Change of User's Name
    handleNameChange = e => {
        cookies.set('username', e.target.value);
    }

    //Handle Change of User's Allergy
    handleAllergyChange = e => {
        cookies.set('allergy', e.target.value);
    }

    //Handle Change of User's Favorite Foods
    handleFavFoodChange = e => {
        cookies.set('favFood', e.target.value);
    }

    //Handle Change of User's Least Favorite Foods
    handleNFavFoodChange = e => {
        cookies.set('nfavFood', e.target.value);
    }

    //Handle Change of User's Favorite Restauraunt
    handleRestChange = e => {
        cookies.set('favRest', e.target.value);
    }

    //Handle Submission of the user data form
    handleSave = e => {
        this.setState({blank:false});
    }

    //Handle Clicking of edit button
    handleEdit = e => {
        this.setState({blank:true});
    }

    render() {
        if(this.state.blank == true){
            //If user clicks "edit" render form to change info
            return (
                <ScProfile>
                    <form>
                        <img src={require('./placeholder.jpg')} width="30%" height="auto" />
                        <p>Username: {cookies.get('username')}</p>
                        <ScInput type="text" name="allergy" placeholder="Allergies" onChange={this.handleAllergyChange}/>
                        <ScInput type="text" name="favFood" placeholder="Favorite Foods" onChange={this.handleFavFoodChange}/>
                        <ScInput type="text" name="nfavFood" placeholder="Hated Foods" onChange={this.handleNFavFoodChange}/>
                        <ScInput type="text" name="favRest" placeholder="Favorite Restauranut" onChange={this.handleRestChange}/>
                        <button type="button" onClick={this.handleSave}>Save</button>
                    </form>
                </ScProfile>
            );
        }
        else{
            //If user data exists render it with option to edit, editing will set blank to true
            return (
                <ScProfile>
                    <div>
                        <img src={require('./placeholder.jpg')} width="30%" height="auto" />
                        <p>Username: {cookies.get('username')}</p>
                        <p>Allergies: {cookies.get('allergy')}</p>
                        <p>Favorite Foods: {cookies.get('favFood')}</p>
                        <p>Disliked Foods: {cookies.get('nfavFood')}</p>
                        <p>Favorite Restauranut: {cookies.get('favRest')}</p>
                        <button type = "button" onClick={this.handleEdit}>Edit</button>
                    </div>
                </ScProfile>    
            );
        }
    }
}

export default Profile;
