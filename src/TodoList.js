import React,{Component,Fragment} from 'react';
import './style.css'
import TodoItem from './TodoItem';
//等价于
// import React from 'react';
// function todoList(){
//     return(
//         //react提供的占位符
//         <React.Fragment>
//             <div>
//                 <input></input>
//                 <button>提交</button>
//             </div>
//             <ul>
//                 <li>学Vue</li>
//                 <li>学React</li>
//             </ul>
//         </React.Fragment>

//     )
// }

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state={
            inputValue:'',
            list:[]
        }
    }
    render(){
        return(
            <Fragment>
            {/*react提供的占位符*/}
                <div>
                    <label htmlFor="input">输入内容</label>
                    <input 
                    id="input"
                    className='input'
                    value={this.state.inputValue}
                    onChange={this.handleInputChange.bind(this)}/>
                    <button onClick={this.handleBtnClick}>提交</button>
                </div>
                <ul>
                    {
                    this.state.list.map((item,index)=>{
                        return (
                        <div key={index}>
                            <TodoItem
                            content={item} index={index}
                            handleLiClick={this.handleLiClick}></TodoItem>
                            {/*<li key={index}
                            onClick={()=>this.handleLiClick(index)}
                            dangerouslySetInnerHTML={{__html:item}}></li>*/}
                        </div>
                        )
                    })
                    }
                </ul>
            </Fragment>
        )
    }
    handleInputChange(e){
        this.setState({
            inputValue:e.target.value
        })
    }
    handleBtnClick=()=>{
        this.setState({
            list:[...this.state.list,this.state.inputValue],
            inputValue:''
        })
    }
    handleLiClick=(index)=>{
        // let list=[...this.state.list]
        // list.splice(index,1)
        // this.setState({
        //     list:list
        // })
        this.setState((prevState)=>{
            let list=[...prevState.list]
            list.splice(index,1)
            return{list:list}
        })
    }
}

export default TodoList;