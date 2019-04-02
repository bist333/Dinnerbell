import React, { Component } from 'react';
import styled from 'styled-components';

const ScMealTimer = styled.div`
    text-align: center;
`;

class MealTimer extends Component {
    constructor(props) {
        super(props);
        this.state = {time: this.props.time}
    }

    componentDidMount() {
        this.interval = setInterval(() => this.setState({ time: this.state.time }), 60000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    static daysUntil(futureDate) {
        var now = new Date();

        return futureDate.getDate() - now.getDate();
    }

    static hoursUntil(futureDate) {
        var now = new Date();

        return futureDate.getHours() - now.getHours();
    }

    static minutesUntil(futureDate) {
        var now = new Date();

        return futureDate.getMinutes() - now.getMinutes();
    }

    static timeUntil(futureDate) {
        futureDate = new Date(futureDate);
        let timeUntilStr = "";
        let days, hours, minutes;

        if ((days = MealTimer.daysUntil(futureDate)) > 0) {
            timeUntilStr += days+" Day(s) ";
        }
        if ((hours = MealTimer.hoursUntil(futureDate)) > 0) {
            timeUntilStr += hours+" Hour(s) ";
        }
        if ((minutes = MealTimer.minutesUntil(futureDate)) > 0) {
            timeUntilStr += minutes+" Minute(s) ";
        }

        return timeUntilStr
    }

    render() {
        return (
            <ScMealTimer>
                You have {MealTimer.timeUntil(this.state.time)} left until your meal
            </ScMealTimer>
        );
    }
}

export default MealTimer;
