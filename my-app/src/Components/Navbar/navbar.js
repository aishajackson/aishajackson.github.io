import React, { Component } from "react";
import {
    Container,
    Icon,
    Menu,
    Sidebar,
    Responsive
} from "semantic-ui-react";
import { Link } from 'react-router-dom';


const NavBarMobile = ({
    children,
    onPusherClick,
    onToggle,
    visible
}) => (
        <Sidebar.Pushable>
            <Sidebar
                as={Menu}
                animation="overlay"
                icon="labeled"
                inverted
                vertical
                visible={visible}
            >
                <Menu.Item as={Link} to='/'>Home</Menu.Item>
                <Menu.Item as={Link} to='/aboutme'>About Me</Menu.Item>
                <Menu.Item as='a'>Resume</Menu.Item>
                <Menu.Item as={Link} to='/contact'>Contact</Menu.Item>
            </Sidebar>

            <Sidebar.Pusher
                dimmed={visible}
                onClick={onPusherClick}
                style={{ minHeight: "100vh" }}
            >
                <Menu fixed="top" inverted>
                    {/* <Menu.Item>
                        <Image size="mini" src="logo.img" />
                    </Menu.Item> */}
                    <Menu.Item onClick={onToggle}>
                        <Icon name="sidebar" />
                    </Menu.Item>
                    <Menu.Menu position="right">
                        <Menu.Item as={Link} to='/'>Aisha A. Jackson</Menu.Item>
                    </Menu.Menu>
                </Menu>
                {children}
            </Sidebar.Pusher>
        </Sidebar.Pushable>
    );

const NavBarDesktop = () => (
    <Menu fixed="top" inverted>
        {/* <Menu.Item>
        <Image size="mini" src="logo.img" />
      </Menu.Item> */}
        <Menu.Item as={Link} to='/'>Aisha A. Jackson</Menu.Item>

        <Menu.Menu position="right">
            <Menu.Item as={Link} to='/'>Home</Menu.Item>
            <Menu.Item as={Link} to='/aboutme'>About Me</Menu.Item>
            <Menu.Item as='a'>Resume</Menu.Item>
            <Menu.Item as={Link} to='/contact'>Contact</Menu.Item>
        </Menu.Menu>
    </Menu>
);

const NavBarChildren = ({ children }) => (
    <Container style={{ marginTop: "5em" }}>{children}</Container>
);

class NavBar extends Component {
    state = {
        visible: false
    };

    handlePusher = () => {
        const { visible } = this.state;

        if (visible) this.setState({ visible: false });
    };

    handleToggle = () => this.setState({ visible: !this.state.visible });

    render() {
        const { children } = this.props;
        const { visible } = this.state;

        return (
            <div>
                <Responsive {...Responsive.onlyMobile}>
                    <NavBarMobile
                        onPusherClick={this.handlePusher}
                        onToggle={this.handleToggle}
                        visible={visible}
                    >
                        <NavBarChildren>{children}</NavBarChildren>
                    </NavBarMobile>
                </Responsive>
                <Responsive minWidth={Responsive.onlyTablet.minWidth}>
                    <NavBarDesktop />
                    <NavBarChildren>{children}</NavBarChildren>
                </Responsive>
            </div>
        );
    }
}

export default NavBar