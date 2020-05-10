import React, {useState} from 'react';

import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

import '@trendmicro/react-sidenav/dist/react-sidenav.css';

import ClickOutside from 'react-click-outside'
import { Paper } from '@material-ui/core';

const wrapper = {
    background: 'inherit',
    backgroundColor: 'inherit',
    color: 'inherit'
}

const icon = {
    fontSize: '1.75em'
}

export default function ToggleableSidenav(props) {
    const [expanded, setExpanded] = useState(false)
    const close = () => setExpanded(false)

    return <ClickOutside onClickOutside={close}>
        <SideNav style={wrapper} expanded={expanded} onToggle={setExpanded}>
            <Toggle style={wrapper} />
            
            <Paper elevation={1}>
                <Nav defaultSelected="home">
                    <NavItem eventKey="home">
                        <NavIcon>
                            <i style={icon} />
                        </NavIcon>
                        <NavText>
                            Home
                        </NavText>
                    </NavItem>

                    <NavItem eventKey="paper">
                        <NavIcon>
                            <i style={icon} />
                        </NavIcon>
                        <NavText>
                            Paper
                        </NavText>
                    </NavItem>
                </Nav>
            </Paper>
        </SideNav>
    </ClickOutside>
}
