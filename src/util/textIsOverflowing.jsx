
function textIsOverflowing(element) {
	let overflowStatus = element.style.overflow;

	// temporarily prevent content from extending beyond border
	if (!overflowStatus || overflowStatus === "visible" ) {
		element.style.overflow = "hidden";
	}

	let widthOverflow = element.clientWidth < element.scrollWidth;
	let heightOverflow = element.clientHeight < element.scrollHeight;

	// undo temporary prevention
	element.style.overflow = overflowStatus;

	return widthOverflow || heightOverflow;
}

export default textIsOverflowing;