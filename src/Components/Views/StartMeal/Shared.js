import styled from 'styled-components';


const ScStartMeal = styled.div`
    text-align: -webkit-center;
    font-size: 24px;
    display: flex;
    flex-direction: column;
    padding: 5% 10%;
    justify-content: center;
`;

const ScMealType = styled.div`
    border: 1px solid;
    padding: 10px;
    width: 50%;
    margin: 10%;
    
    &:hover{
    background-color: #950020;
    }
`;

export default {ScStartMeal, ScMealType};