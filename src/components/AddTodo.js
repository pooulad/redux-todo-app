import React, { Component } from 'react';
import { connect } from "react-redux";
import { addTodo } from "../redux/todo/actions"
import "./AddTodo.css";

class AddTodo extends Component {
    constructor(props){
        super(props);
        this.state = {
            input : "",
            error : ""
        }
    }
    changeHandler = (event) => {
        this.setState({input : event.target.value})
    }
    clickHandler = () => {
        if (this.state.input !== "") {
            this.props.addTodo(this.state.input)
            this.setState({input : ""})
        }
    }
    render() {
        return (
            <div className="addTodo">
                <h1>Add Todo</h1>
                <input className="addInput" type="text" value={this.state.input} onChange={this.changeHandler} placeholder="Write Your Todo" />
                <button className="addBtn" onClick={this.clickHandler}>Add</button>
            </div>
        )
    }
}


export default connect(null,{addTodo})(AddTodo)