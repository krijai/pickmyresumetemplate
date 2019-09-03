import React, { Component } from 'react';
import { Button } from 'antd';
import './default-button.scss';

class DefaultButton extends Component {
    render() {
        return (
            <React.Fragment>
                {/* <Button type="primary">Primary</Button> */}
                <Button className={this.props.className}>
                    {this.props.value}
                </Button>
                {/* <Button type="dashed">Dashed</Button>
                <Button type="danger">Danger</Button>
                <Button type="link">Link</Button> */}
            </React.Fragment>
        );
    }
}

export default DefaultButton;