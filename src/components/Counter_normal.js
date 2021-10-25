import React from "react";
import { Row, Col, Typography, Button, Card} from 'antd';

//import REDUX
import { connect } from 'react-redux';
import {actionTypes} from '../redux';


const Counter = ({counter,decrement,increment}) =>{

    return (
        <React.Fragment>
            <Card title="Counter Master"  bordered={false}>
            <Row>
                <Typography.Title>Counter Master</Typography.Title>
            </Row>
            <Row>
                <Col md={9} />
                <Col md={2} >
                    <Button size="large" Icon="minus" shape="circle" onClick={decrement}> - </Button>
                </Col>
                <Col md={2}> <span style={{fontSize:'4rem', fontWeight:'bold'}}></span>{ counter } </Col>
                <Col md={9}> 
                <Button size="large" Icon="plus" shape="circle" onClick={increment} > + </Button>
                </Col>
            </Row>
            </Card>
        </React.Fragment>
    ) 
}

const mapStateToProps = state => ({
    counter:state.counter
})

const mapDispatchToProps = dispatch => ({
    increment:() => { dispatch({type:actionTypes.INCREMENT}) },
    decrement:() => { dispatch({type:actionTypes.DECREMENT}) },
})
export default connect(mapStateToProps,mapDispatchToProps)(Counter);