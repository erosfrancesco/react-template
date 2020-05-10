import React from 'react'
import ClickOutside from 'react-click-outside'
import SideNavContent from './SideNavContent'

// import useStyle from './style'

export default function SideNav() {
  // const classes = useStyle()
  const close = () => console.log('closing sideNav')
  return <ClickOutside onClickOutside={close}>  
    <SideNavContent />
  </ClickOutside>
}