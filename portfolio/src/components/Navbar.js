import React from 'react';
import {slide as Menu} from 'react-burger-menu';
import { Link } from 'react-router-dom'

class Navbar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            menuOpen: false
        }
    }
    handleStateChange(state){
        this.setState({menuOpen: state.isOpen})
    }

    closeMenu (){
        this.setState({menuOpen: false})
    }
    toggleMenu(){
        this.setState(state => ({menuOpen: !state.menuOpen}))
    }
    render(){
        return (
            <Menu isOpen={this.state.menuOpen} onStateChange={(state) => this.handleStateChange(state)}>
                <Link onClick={() => this.closeMenu()} id="home" className="menu-item" to="/">
                 Home
                </Link>
                <Link onClick={() => this.closeMenu()} id="portfolie" className="menu-item" to="/portfolio">
                 Portfolie
                </Link>     
                <Link onClick={() => this.closeMenu()} id="CV" className="menu-item" to="/CV">
                 CV
                </Link>     
            </Menu>
        )
    }
}

export default Navbar