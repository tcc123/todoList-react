import React,{Component} from 'react'
import PropTypes from 'prop-types'

class TodoItem extends Component{
    render() {
        const {content,test}=this.props
        return (
        <div onClick={this.handleClick}>{test}-{content}</div>
        )
    }
    handleClick=()=>{
        this.props.handleLiClick(this.props.index)
    }
}

TodoItem.propTypes={
    test:PropTypes.string.isRequired,
    content:PropTypes.string,
    handleLiClick:PropTypes.func,
    index:PropTypes.number
}

TodoItem.defaultProps={
    test:'hello world'
}

export default TodoItem