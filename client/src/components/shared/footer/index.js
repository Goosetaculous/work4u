import React , { Component } from 'react';
import './style.css';


class Bottom extends Component {
    render(){
        return(
            <div>
                {this.props.children}
                <div className="footer">
                    <div className="copyright-statement">
                        © 2017 Work4U 
                    </div>
                </div>
            </div>
        )
    }
}

export default Bottom