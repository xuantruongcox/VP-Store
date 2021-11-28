import * as React from 'react';
import NavbarComponent from '../components/navbar-component';

export default class MainLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <React.Fragment>
                <NavbarComponent></NavbarComponent>
                <div className="container main-content">
                    {this.props.children}
                </div>
            </React.Fragment>
        )
    }
}
