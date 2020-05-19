import React,{ Component } from "react"

class Counter extends Component {
    state ={
        count:this.props.value,
        tags:["tag1","tag2","tag3"]
        // imgUrl:"http://picsum.photos/200"
    };
    // constructor (){
    //     super()
    //     this.countIncreament= this.countIncreament.bind(this)
        
    // }


    countIncreament =()=>
    this.setState({count:this.state.count + 1})        

   
    render() {     
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary"
        return ( <div>
        <img src={this.state.imgUrl}  alt =''/>
        <span className={classes} style= {{fontSize:20}} > { this.formatCount()}</span>
        <button onClick= {this.countIncreament} className="btn btn-secondary" >increment</button>
        {/* {this.renderTag()} */}
        </div>);
    }

   

    renderTag(){
        if (this.state.tags.length===0 ) {
            return <p>no tags here</p>
        };
        return <ul>{this.state.tags.map(tag=><li key= {tag}>{tag}</li>)}</ul>
    }
    formatCount(){
        const {count} = this.state
        return count === 0 ? <span>zero</span> : count
    }
}

export default Counter;

