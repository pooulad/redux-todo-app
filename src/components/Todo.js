import React from 'react';
import { toggleTodo } from "../redux/todo/actions";
import { connect } from "react-redux";

function Todo(props) {
    return (
        <div onClick={() => props.toggle(props.row.id)}>
            {props.row && props.row.complete ? <span style={{ color: "green" }}>done</span> : <span style={{ color: "red" }}>in progress</span>}
            -{props.row.content}
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        toggle: id => dispatch(toggleTodo(id))
    }
}

export default connect(null, mapDispatchToProps)(Todo)
