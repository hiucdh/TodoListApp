import React from "react";
class AddComponent extends React.Component {
    state = {
        title: "",
        salary: "",
    }
    handleChangetitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    handleChangesalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        if (!this.state.title || !this.state.salary) {
            alert("missing required params")
            this.setState({
                title: "",
                salary: "",
            })
            return;
        }
        //kiem tra xem co dien day du du lieu chua,neu chua thi no se reset state va bao cho nguoi dung
        this.props.addNewJob({
            id: Math.floor(Math.random() * 1000000000),
            tittle: this.state.title,
            salary: this.state.salary,
        })
        this.setState({
            title: "",
            salary: "",
        })
        //reset du lieu khi cap nhat ra man hinh
    }
    render() {
        return (
            <>
                <div>Add Component</div>
                <form>
                    <label htmlFor="fname">JobName:</label>
                    <br />
                    <input type="text" value={this.state.title} onChange={(event) => (this.handleChangetitle(event))} />
                    <br />
                    <label htmlFor="lname">Salary:</label>
                    <br />
                    <input type="text" value={this.state.salary} onChange={(event) => (this.handleChangesalary(event))} />
                    <br />
                    <input type="button" value="Submit" onClick={(event) => (this.handleSubmit(event))} />
                </form></>

        )
    }
}
export default AddComponent;
//goi ham su dung con tro this.props.addNewJob de truyen du lieu len component cha
//ham random o tren de cho ngay nhien so 1 toi (1000000000 -1)