
export let width = 0;
export let height = 0;

export let updateSize = (window: Window, w: number, h: number) => {
	w = window.innerWidth;
	h = window.innerHeight;
};

export function ScreenSize(window: Window) {
	this.width = 0;
	this.height = 0;
	this.setWidth = () => {
		this.width = window.innerWidth;
	}

	this.setHeight = () => {
		this.height = window.innerHeight;
	}
}
