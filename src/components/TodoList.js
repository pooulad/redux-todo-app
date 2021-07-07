import React from 'react';
import { connect } from "react-redux";
import Todo from "./Todo";


function TodoList(props) {
    return (
        <div className="todoList">
            <div>
                {
                    props.todos && props.todos.length ?
                        props.todos.map((row, index) => {
                            return <Todo key={index} row={row} />
                        }) : <div>nothing to doing</div>
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
