import React, {useState} from 'react'
import ClickOutside from 'react-click-outside'
import SideNavContent from './SideNavContent'

import useStyle from './style'

export default function SideNav() {
  const classes = useStyle()
  const [open, setOpen] = useState(true)
  const close = () => {
    setOpen(false)
  }

  return <ClickOutside className={classes.content} onClickOutside={close}>  
    {open ? <SideNavContent /> : null}
  </ClickOutside>
}