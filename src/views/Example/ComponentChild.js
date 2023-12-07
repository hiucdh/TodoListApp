import React from "react";
class ChildComponent extends React.Component {
    state = {
        showJobs: false
    }
    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }
    handleOnclickDelete = (job) =>{
        console.log("handleOnclickDelete: ",job)
        this.props.deleteJob(job)
    }
    render() {
        let { arrjob } = this.props
        let { showJobs } = this.state
        return (
            <>
                {showJobs === false &&
                    <div>
                        <button onClick={() => (this.handleShowHide())}> Show </button>
                    </div>}

                {showJobs &&
                    <>
                        <div className="propsValue">
                            {arrjob.map((items, index) => {
                                return (
                                    <>
                                    <div key={items.id}> {items.tittle} - {items.salary} $ <span onClick={() => (this.handleOnclickDelete(items))}>x</span> </div> 
                                    </>
                                    
                                )
                            })}
                        </div>
                        <div>
                            <button onClick={() => (this.handleShowHide())}> Hide </button>
                        </div>
                    </>}
            </>
        )
    }
}
export default ChildComponent;
// show hide 1 cach thong minh