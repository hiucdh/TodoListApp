import React from "react";
import './ListTodo.scss'
import AddTodo from "./AddTodo";
import { toast } from 'react-toastify';

class ListTodo extends React.Component {
    state = {
        listTodos: [{ id: "todo1", title: "fixing bug and cry" },
        { id: "todo2", title: "watching tv" },
        { id: "todo3", title: "running" }],
        editTodo: {}
    }
    addNewTodo = (newtodo) => {
        this.setState({
            listTodos: [...this.state.listTodos, newtodo]
        })
    }
    deleteTodo =(todo) =>{
        let currentJob = this.state.listTodos
        currentJob = currentJob.filter(currentJob => todo.id !== currentJob.id )
        this.setState({
            listTodos:currentJob,
        })
        toast.info("Done :)")
    }
    handleEditTodo =(todo) =>{
        let {editTodo,listTodos} = this.state
        let isEmptyObj = Object.keys(editTodo).length === 0
        if(isEmptyObj === false && editTodo.id === todo.id){
            let listTodosCopy = [...listTodos]
            let index = listTodos.findIndex(item => item.id === todo.id)
            listTodosCopy[index].title = editTodo.title
            this.setState({
                listTodos:listTodosCopy,
                editTodo:{}
            })
            toast.success("change success")
            return;
        }
        this.setState({
            editTodo:todo
        })
    }
    handleOnChangeTodo = (event) => {
        let editTodoCopy = {...this.state.editTodo}
        editTodoCopy.title = event.target.value
        this.setState({
            editTodo:editTodoCopy
        })
    }
    render() {
        let { listTodos , editTodo} = this.state
        let isEmptyObj = Object.keys(editTodo).length === 0
        console.log(isEmptyObj)
        return (
            <div className="todo-list-container">
                <AddTodo addNewTodo={this.addNewTodo} />
                <div className="list-todo-content">
                    {listTodos && listTodos.length > 0 &&
                        listTodos.map((items, index) => {
                            return (
                                <div className="todo-child" key={items.id}>
                            
                                    {isEmptyObj === true

                                    ?
                                    <span>{index + 1} - {items.title}</span>
                                    :
                                    <>
                                    {editTodo.id === items.id ?
                                    <span>
                                        {index + 1} - <input value={editTodo.title} 
                                        onChange={(event) => (this.handleOnChangeTodo(event))}
                                        ></input>
                                    </span>
                                    :
                                    <span>{index + 1} - {items.title}</span>
                                    }
                                    </>
                                    }
                                    {isEmptyObj ?
                                        <button className="edit" onClick={() => (this.handleEditTodo(items))}>edit</button>
                                        :
                                        <>
                                            {items.id !== editTodo.id ?
                                            <button className="edit" onClick={() => (this.handleEditTodo(items))}>edit</button>
                                            :
                                            <button className="edit" onClick={() => (this.handleEditTodo(items))}>save</button>}
                                        </>
                                        
                                    }

                                    <button className="delete"
                                onClick={() => (this.deleteTodo(items))}
                                >delete</button>
                                </div>
                            )
                        })}
                </div>
            </div >
        )
    }
}
export default ListTodo;
//<button className="edit" onClick={() => (this.handleEditTodo(items))}>edit</button>