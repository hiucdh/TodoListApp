import React from "react";
import ComponentChild from "./ComponentChild";
import AddComponent from "./AddComponent";
class Mycomponent extends React.Component {
  state = {
    arrjob: [
      { id: "abcjob1", tittle: "dev", salary: "500" },
      { id: "abcjob2", tittle: "tester", salary: "400" },
      { id: "abcjob3", tittle: "projectmanager", salary: "1000" }
    ]
  }
  addNewJob = (job) => {
    let currentJob = this.state.arrjob;
    currentJob.push(job);
    
    this.setState({
      arrjob: currentJob,
      // arrjob: [...this.state.arrjob,job]
      ///... toan tu copy
    })
    console.log(job)
    
  }
  deleteJob = (job) =>{
    const updatedArrJob = this.state.arrjob.filter(item => item.id !== job.id)
    this.setState ({
      arrjob:updatedArrJob
    })
  }
  render() {
    return (
      <div className="mainForm">
        <AddComponent addNewJob={this.addNewJob} />
        <ComponentChild
          arrjob={this.state.arrjob}
          deleteJob = {this.deleteJob} />
      </div>
    );
  }
}
export default Mycomponent;
//[...] add phan tu moi vao state
//ham add NewJob co the lam props voi muc dich truyen du lieu tu con toi cha