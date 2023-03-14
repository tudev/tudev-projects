// Third party
import React from 'react'

// General tools
import useWindowDimensions, { setVariableCssVars } from './HelpfulFunctions'

const SetDimensions = (): React.ReactElement => {
	// This is a new component because when in <App>, it was reloading if scrolled in too soon and looking bad.
	document.documentElement.style.setProperty('--vh', `${useWindowDimensions().width}px`)
	document.documentElement.style.setProperty('--vh-npx', `${useWindowDimensions().width}`)
	// eslint-disable-next-line @typescript-eslint/no-unused-expressions
	setVariableCssVars()
	return (<></>)
}

export default SetDimensions
