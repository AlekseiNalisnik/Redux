import React, { Component } from 'react';
import { connect } from 'react-redux';

class Details extends Component {
    render() {
        if(!this.props.car) {
            return (<p>Выберите автомобиль...</p>)
        }
        return (
            <div>
                <h2>{this.props.car.name}</h2>
                <img src={this.props.car.img} alt={this.props.car.name}/> <br/>
                <p>{this.props.car.desc}</p>
                <p>Скорость: {this.props.car.speed}</p>
                <p>Вес: {this.props.car.weight}</p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        car: state.active  
    };
}


export default connect(mapStateToProps)(Details);