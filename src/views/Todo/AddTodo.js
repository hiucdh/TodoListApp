import React from "react";
import { toast } from 'react-toastify';

class AddTodo extends React.Component {
    state = {
        title: ""
    }
    HandleOnChangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    HandleOnClickAddButton = () => {
        if (!this.state.title) {
            toast.error("🦄 missing title")
            return
        }
        this.props.addNewTodo(
            {
                id: Math.floor(Math.random() * 10000),
                title: this.state.title
            },
            toast.success("🦄 yeah you are good")
        )
        this.setState({
            title: ""
        })
    }
    render() {
        let title = this.state.title
        return (
            <div className="add-todo-list">
                <input type="text" value={title} onChange={(event) => (this.HandleOnChangeTitle(event))} />
                <button type="button" className="add" onClick={() => (this.HandleOnClickAddButton())}>add</button>
            </div>
        )
    }
}
export default AddTodo;