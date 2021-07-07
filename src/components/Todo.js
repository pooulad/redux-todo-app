import React from 'react';
import { toggleTodo } from "../redux/todo/actions";
import { connect } from "react-redux";
import "./Todo.css";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';



function Todo(props) {
    return (
        <div className="todo">
            <div className="content">{props.row && props.row.complete ? <div id="complete">{props.row.content}</div> : <div>{props.row.content}</div>}</div>
            <div className="status" onClick={() => props.toggle(props.row.id)}>
                {props.row && props.row.complete ? <CheckCircleIcon /> : <PlaylistAddIcon />}
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        toggle: id => dispatch(toggleTodo(id))
    }
}

export default connect(null, mapDispatchToProps)(Todo)
