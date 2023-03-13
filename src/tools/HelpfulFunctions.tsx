import { useEffect, useState } from 'react'

import debounce from 'lodash.debounce'

export const getScrollY = (): {scroll: number} => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [scroll, setScroll] = useState({ scroll: window.scrollY })

	// eslint-disable-next-line react-hooks/rules-of-hooks
	useEffect(() => {
		const handler = debounce(() => {
			setScroll({ scroll: window.scrollY })
		}, 10)

		window.addEventListener('scroll', handler)
		window.addEventListener('resize', handler)

		return () => {
			window.removeEventListener('scroll', handler)
			window.removeEventListener('resize', handler)
		}
	})

	return scroll
}

export const scrollToTop = (): void =>{
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	})
}

export const setVariableCssVars = (): void => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	useEffect(() => {
		const setVh = debounce(() => {
			document.documentElement.style.setProperty('--vh', `${window.innerWidth}px`)
		}, 10)

		window.addEventListener('resize', setVh)

		return () => {
			window.removeEventListener('resize', setVh)
		}
	})
}

export default function useWindowDimensions(): {width: number, height: number} {
	const [windowDimensions, setWindowDimensions] = useState({
		width: window.innerWidth,
		height: window.innerHeight
	})

	useEffect(() => {
		setWindowDimensions({
			width: window.innerWidth,
			height: window.innerHeight
		})
	}, [])

	return windowDimensions
}
