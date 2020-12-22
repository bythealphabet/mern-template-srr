import React, { useState } from "react";

function useSwipe(swipeLeft, swipeRight) {
	const [startTouch, setStartTouch] = useState(0);
	const [endTouch, setEndTouch] = useState(0);

	function swipeHandler() {
		if (endTouch == 0) {
			return;
		}
		if (startTouch > endTouch) {
			setStartTouch(0);
			setEndTouch(0);
			return swipeLeft();
		}

		if (startTouch < endTouch) {
			setStartTouch(0);
			setEndTouch(0);
			return swipeRight();
		}
	}

	return {
		onMouseDown: () => swipeLeft(),
		onTouchStart: (e) => setStartTouch(e.touches[0].screenX),
		onTouchMove: (e) => setEndTouch(e.touches[0].screenX),
		onTouchEnd: swipeHandler,
	};
}
export default useSwipe;
