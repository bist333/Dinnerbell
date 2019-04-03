import React, { Component } from 'react';
import styled from 'styled-components';

import {ScStartMeal, ScMealType} from './StartMeal.js';


class StartMeal extends Component {
    render() {
        return (
            <ScStartMeal>
                <ScMealType>
                    I&apos;m Cooking
                </ScMealType>
                <ScMealType>
                    We&apos;re Ordering
                </ScMealType>
                <ScMealType>
                    We&apos;re Going Out
                </ScMealType>
            </ScStartMeal>
        );
    }
}

export default StartMeal;
