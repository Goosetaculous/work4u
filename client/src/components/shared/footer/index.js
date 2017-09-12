import React , { Component } from 'react';
import './style.css';

class Bottom extends Component {
    render(){
        return(
            <div>
                <hr />
                <div className="footer">
                    <div>
                        <span className="footer-link"><a href="https://www.google.com">About Us</a></span>
                        <span className="footer-link"><a href="https://www.google.com">API Category</a></span>
                    </div>
                    <div className="copyright-statement">
                        XXX Copyright Reserved
                    </div>
                </div>
            </div>
        )
    }
}

export default Bottom