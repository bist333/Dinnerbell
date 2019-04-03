import React, { Component } from 'react';
import styled from 'styled-components';
import Cookies from 'universal-cookie';
import Placeholder from './placeholder.jpg'

//Inits cookies
const cookies = new Cookies();

const ScProfile = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 24px;
    
    margin: auto;
    margin-top: 4%;
`;

const ScEditWrapper = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 24px;
    
    margin: auto;
    margin-top: 4%;
    align-items: center;
`;

const ScInput = styled.input`
    border: 2px solid #EF476F;
    border-radius: 4px;
    font-size: 18px;
    width: 33%;
    margin-top: .5%;
    margin-bottom: .5%;
    padding: 10px;

`;

const ScButton = styled.button`
    margin-top: 2%;
    margin-bottom: 2%;
    width: 33%;
    text-align: center;
    border-style: solid;
    border-width: 1px;
    cursor: pointer;
    background-color: #EF476F;
    font-size: 18px;
    font-weight: bold;
    color: #F8F8FF;
    border-radius: 10px;
`;

class Profile extends Component {
    constructor(props){

        super(props)
        this.state = {
            blank: false,
            username: cookies.get('username'),
            allergy: cookies.get('allergy'),
            favFood: cookies.get('favFood'),
            nfavFood: cookies.get('nfavFood'),
            favRest: cookies.get('favRest'),
        }
    }

    //Handle Change of User's Name
    handleNameChange = e => {
        cookies.set('username', e.target.value);
        this.setState({username: e.target.value});
    }

    //Handle Change of User's Allergy
    handleAllergyChange = e => {
        cookies.set('allergy', e.target.value);
        this.setState({allergy: e.target.value});
    }

    //Handle Change of User's Favorite Foods
    handleFavFoodChange = e => {
        cookies.set('favFood', e.target.value);
        this.setState({favFood: e.target.value});
    }

    //Handle Change of User's Least Favorite Foods
    handleNFavFoodChange = e => {
        cookies.set('nfavFood', e.target.value);
        this.setState({nfavFood: e.target.value});
    }

    //Handle Change of User's Favorite Restauraunt
    handleRestChange = e => {
        cookies.set('favRest', e.target.value);
        this.setState({favRest: e.target.value});
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
        if(this.state.blank === true){
            //If user clicks "edit" render form to change info
            return (
                <ScProfile>
                    <form>
                        <img src={Placeholder} width="30%" height="auto" />
                        <p>Username: {cookies.get('username')}</p>
                        <ScEditWrapper>
                            <ScInput type="text" name="allergy" placeholder="Allergies" value={this.state.allergy} onChange={this.handleAllergyChange}/>
                            <ScInput type="text" name="favFood" placeholder="Favorite Foods" value={this.state.favFood} onChange={this.handleFavFoodChange}/>
                            <ScInput type="text" name="nfavFood" placeholder="Hated Foods" value={this.state.nfavFood} onChange={this.handleNFavFoodChange}/>
                            <ScInput type="text" name="favRest" placeholder="Favorite Restauranut" value={this.state.favRest} onChange={this.handleRestChange}/>
                        <   ScButton type="button" onClick={this.handleSave}>Save</ScButton>
                        </ScEditWrapper>
                    </form>
                </ScProfile>
            );
        }
        else{
            //If user data exists render it with option to edit, editing will set blank to true
            return (
                <ScProfile>
                    <div>
                        <img src={Placeholder} width="30%" height="auto" />
                        <p>Username: {cookies.get('username')}</p>
                        <p>Allergies: {cookies.get('allergy')}</p>
                        <p>Favorite Foods: {cookies.get('favFood')}</p>
                        <p>Disliked Foods: {cookies.get('nfavFood')}</p>
                        <p>Favorite Restauranut: {cookies.get('favRest')}</p>
                        <ScButton type = "button" onClick={this.handleEdit}>Edit</ScButton>
                    </div>
                </ScProfile>    
            );
        }
    }
}

export default Profile;
