import { getScrollY } from "./HelpfulFunctions"

export type NAV_COLORS = {
	BACKGROUND: string,
	TEXT: string,
	HOVER: string
}

export class COLORS {
    static readonly PRIMARY = '#a41e35'
    static readonly BACKGROUND = '#721827'
	static readonly TEXT = '#ffffff'
}

export const getNavColors = (): NAV_COLORS => {
	const { scroll } = getScrollY()

	return {
		BACKGROUND: scroll <= 10 ? 'transparent' : '#ffffff',
		TEXT: scroll <= 10 ? '#d8bcbf' : '#888888',
		HOVER: scroll <= 10 ? '#ffffff' : COLORS.PRIMARY,
	}
}

export class PATHS {
	static readonly HOME = '/home'
	static readonly RYAN_HODGE = '/ryan-hodge'
}
