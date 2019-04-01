import React, { Component } from 'react';
import styled from 'styled-components';
import Cookies from 'universal-cookie';

//Inits cookies
const cookies = new Cookies();

const ScProfile = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    
    margin: auto;
    display: block;
    text-align: center;
    width: 100%;
    margin-left: 25%;
    margin-top: 4%;
`;

//Styling for the profile elements
const ScProInfo = styled.div`
    margin: auto;
    display: block;
    text-align: center;
    width: 100%;
    margin-left: 25%;
    margin-top: 4%;
    font-size: 18pt;
`;

const ScProInfoField = styled.p`
    display: block;
    padding: 5px;
    margin-top: 20px;
    margin-bot: 20px;
    font-size: 18pt;
`;

const ScProEditButton = styled.button`
    display: block;
    padding: 5px;
    margin-top: 20px;
    margin-bot: 20px;
    font-size: 18pt;
`;

//Styling for the form elements
const ScProForm = styled.form`
    margin: auto;
    display: block;
    text-align: center;
    width: 100%;
    margin-left: 25%;
    margin-top: 4%;
    font-size: 18pt;
`;

const ScProField = styled.input`
    display: block;
    padding: 5px;
    margin-top: 20px;
    margin-bot: 20px;
    font-size: 18pt;
`;

const ScProSubmitButton = styled.button`
    display: block;
    padding: 5px;
    margin-top: 20px;
    margin-bot: 20px;
    font-size: 18pt;
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
        this.setState({ blank: false });
    }

    //Handle Clicking of edit button
    handleEdit = e => {
        this.setState({blank:true});
    }

    render() {
        if(this.state.blank == true){
                //If no user data exists, render form to be submitted
                return (
                    <div>
                        <ScProForm>
                            <ScProInfoField>Username: {cookies.get('username')}</ScProInfoField>
                            <ScProField type="text" name="allergy" placeholder="Allergies" value={cookies.get('allergy')} onChange={this.handleAllergyChange}/>
                            <ScProField type="text" name="favFood" placeholder="Favorite Foods" value={cookies.get('favFood')} onChange={this.handleFavFoodChange}/>
                            <ScProField type="text" name="nfavFood" placeholder="Hated Foods" value={cookies.get('nfavFood')} onChange={this.handleNFavFoodChange}/>
                            <ScProField type="text" name="favRest" placeholder="Favorite Restauranut" value={cookies.get('favRest')} onChange={this.handleRestChange}/>
                            <ScProSubmitButton type="button" onClick={this.handleSave}>Save</ScProSubmitButton>
                        </ScProForm>
                    </div>
                );
        }
        else{
            //If user data exists render it with option to edit, editing will set blank to true
            return (
                <ScProInfo>
                    <ScProInfoField>Username: {cookies.get('username')}</ScProInfoField>
                    <ScProInfoField>Allergies: {cookies.get('allergy')}</ScProInfoField>
                    <ScProInfoField>Favorite Foods: {cookies.get('favFood')}</ScProInfoField>
                    <ScProInfoField>Disliked Foods: {cookies.get('nfavFood')}</ScProInfoField>
                    <ScProInfoField>Favorite Restauranut: {cookies.get('favRest')}</ScProInfoField>
                    <ScProEditButton type = "button" onClick={this.handleEdit}>Edit</ScProEditButton>
                </ScProInfo>
            );
        }
    }
}

export default Profile;
