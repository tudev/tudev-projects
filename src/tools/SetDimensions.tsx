// Third party
import React from 'react'
import { isMobile } from 'react-device-detect'

// General tools
import useWindowDimensions, { setVariableCssVars } from './HelpfulFunctions'


const SetDimensions = (): React.ReactElement => {
	// This is a new component because when in <App>, it was reloading if scrolled in too soon and looking bad.
	document.documentElement.style.setProperty('--vh', `${useWindowDimensions().width}px`)
	// eslint-disable-next-line @typescript-eslint/no-unused-expressions
	isMobile ? null : setVariableCssVars()
	return (<></>)
}

export default SetDimensions
