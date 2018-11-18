module.exports = property => {
	// A property that starts with any of these characters is
	// considered a browser hack
	const startCharacters = '_ ! $ & * ( ) = % + @ , . / ` [ ] # ~ ? : < > |'.split(
		' '
	)

	// This regex asserts that a property starts with a `-`
	// but is not immediately followed by another `-` or any
	// of the common browser prefixes
	const browserPrefixRegex = /^-(?!-|webkit-|moz-|ms-|o-)/

	return (
		startCharacters.some(character => property.startsWith(character)) ||
		browserPrefixRegex.test(property)
	)
}
