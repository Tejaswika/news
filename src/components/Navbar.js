import React, { Component } from 'react'

export class Navbar extends Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">News App</a>
                    </div>
                </nav>  
            </>
        )
    }
}
export default Navbar
