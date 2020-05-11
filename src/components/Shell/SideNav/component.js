import React, {useState, useMemo} from 'react'
import ClickOutside from 'react-click-outside'
import SideNavContent from './SideNavContent'

import useStyle from './style'

export default function SideNav() {
  const classes = useStyle()
  const [open, setOpen] = useState(true)
  const close = () => setOpen(false)

  const style = useMemo(() => {
    return { width: open ? '20vw' : '0vw' }
  }, [open])


  return <ClickOutside  className={classes.content} 
                        style={style}
                        onClickOutside={close}>  
    <SideNavContent />
  </ClickOutside>
}