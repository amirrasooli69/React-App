import React, { Component } from 'react';
import styles from "./Cards.module.css";
import Card from "./Card";

import IphoneX from '../images/iphone-x.jpg';
import Iphone11 from '../images/iphone-11.jpg';
import Iphone12 from '../images/iphone-12.jpg';
import Iphone13 from '../images/iphone-13.jpg';
import s21 from '../images/s21.jpg';



class Cards extends Component {
    render() {
        return (
            <div className={styles.container}>
                <Card image={IphoneX} name='IphoenX' cost='599 $'/>
                <Card image={Iphone11} name='Iphoen11' cost='699 $'/>
                <Card image={Iphone12} name='Iphoen12' cost='799 $'/>
                <Card image={Iphone13} name='Iphoen13' cost='899 $'/>
                <Card image={s21} name='S21' cost='600 $'/>


            </div>
        );
    }
}

export default Cards;