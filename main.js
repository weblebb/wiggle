const container = document.querySelector('.container')

const split = Splitting({
	whitespace: true
})

const update = () => {
	const { el } = split[0]
	const originalPathWidth = el.clientWidth
	const originalPathHeight = el.clientHeight
	
	const m = container.clientWidth / originalPathWidth
	const containerLeft = container.getBoundingClientRect().left
	const elLeft = el.getBoundingClientRect().left
	
	// If same width, do nothing
	if (m === 1) return
	
	// Scale
	el.style.setProperty('--x', m)
	
	// Set transform origin
	if (container.clientWidth < originalPathWidth) {
		el.style.setProperty('--o', 'left')
	} else {
		el.style.setProperty('--o', 'center')
	}
}

const observer = new ResizeObserver(update)
observer.observe(container)