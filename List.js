import React, { Component } from 'react'; 
import './List.css'

export default class List extends Component {
    state ={
        filterItem : ''
    }

    onChangeText = (e) => {
        console.log(e.target.value)
        this.setState({
            filterItem : e.target.value
        })
    }
    render() {

        const searchList = this.props.searchList.filter(
            listItem => {
                return listItem.name.toLowerCase().indexOf(
                    this.state.filterItem.toLowerCase()
                ) !== -1
            }
        )


        return (
            <div className="List">

                <input name={"filter"} className="filter" placeholder="Filter by name or tel" onChange = {this.onChangeText}/>

                <ul>
                    {
                        searchList.map(listItem =>
                        
                        <li key={listItem.tel}>
                            <span className="name">Name: {listItem.name}</span>
                            <span className="tel">Tel: {listItem.tel}</span> <br/>
                            <span className="clearBoth"></span>
                        </li>
                        )
                    }

                    {/* <li>
                        <span className="name">Name: Murat</span>
                        <span className="tel">Tel: 111</span>
                    </li> */}
                </ul>
            </div>
        )
    }
}
