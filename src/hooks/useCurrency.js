const useCurrency = (price, locale, curr) => {
	const converted = new Intl.NumberFormat(locale, {
		style: `currency`,
		currency: curr,
	}).format(price.toFixed(2))

	return [converted]
}

export { useCurrency }

