import React from 'react';
import { connect } from "react-redux";
import Todo from "./Todo";
import "./TodoList.css";


function TodoList(props) {
    return (
        <div className="todoList">
            <h1 style={{ color:"black" }}>Todos</h1>
            <div>
                {
                    props.todos && props.todos.length ?
                        props.todos.map((row, index) => {
                            return <Todo key={index} row={row} />
                        }) : <div style={{ color:"black" }}>nothing to doing</div>
                }
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        todos: state.data
    }
}

export default connect(mapStateToProps)(TodoList)
