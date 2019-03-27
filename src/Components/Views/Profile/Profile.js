import React, { Component } from 'react';
import styled from 'styled-components';


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
            name: '',
            allergy: '',
            favFood: '',
            nfavFood: '',
            favRest: '',
            blank: true,
        }
    }

    //Handle Change of User's Name
    handleNameChange = e => {
        this.setState({ name: e.target.value });
    }

    //Handle Change of User's Allergy
    handleAllergyChange = e => {
        this.setState({ allergy: e.target.value });
    }

    //Handle Change of User's Favorite Foods
    handleFavFoodChange = e => {
        this.setState({ favFood: e.target.value });
    }

    //Handle Change of User's Least Favorite Foods
    handleNFavFoodChange = e => {
        this.setState({ nfavFood: e.target.value });
    }

    //Handle Change of User's Favorite Restauraunt
    handleRestChange = e => {
        this.setState({ favRest: e.target.value });
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
                        <ScProField type="text" name="name" placeholder="Username" value={this.state.symbol} onChange={this.handleNameChange}/>
                        <ScProField type="text" name="allergy" placeholder="Allergies" value={this.state.allergy} onChange={this.handleAllergyChange}/>
                        <ScProField type="text" name="favFood" placeholder="Favorite Foods" value={this.state.favFood} onChange={this.handleFavFoodChange}/>
                        <ScProField type="text" name="nfavFood" placeholder="Hated Foods" value={this.state.nfavFood} onChange={this.handleNFavFoodChange}/>
                        <ScProField type="text" name="favRest" placeholder="Favorite Restauranut" value={this.state.favRest} onChange={this.handleRestChange}/>
                        <ScProSubmitButton type="button" onClick={this.handleSave}>Save</ScProSubmitButton>
                    </ScProForm>
                </div>
            );
        }
        else{
            //If user data exists render it with option to edit, editing will set blank to true
            return (
                <div>
                    <p>oof</p>
                    <button type = "button" onClick={this.handleEdit}>Edit</button>
                </div>
            );
        }
    }
}

export default Profile;
