class HTMLement {
    id:any;
    el:any;
	constructor(el) {
		this.id = typeof el == "string" ? el : el.id;
		this.el = document.getElementById(this.id);
	}

	get style() {
		return this.el.style;
	}

	setTxt(txt) {
		this.el.textContent = txt;
	}
	static setTxt(id, txt) {
		new HTMLement(id).setTxt(txt);
	}

	setHTML(html) {
		this.el.innerHTML = html;
	}
	static setHTML(id, html) {
		new html(id).setHTML(html);
	}
	
	addHTML(html) {
		this.el.innerHTML += html;
	}
	static addHTML(id, html) {
		new html(id).addHTML(html);
	}

	setDisplay(bool) {
		this.el.style.display = bool ? "" : "none";
	}
	static setDisplay(id, bool) {
		new HTMLement(id).setDisplay(bool);
	}

	addClass(name) {
		this.el.classList.add(name);
	}
	static addClass(id, name) {
		new HTMLement(id).addClass(name);
	}

	removeClass(name) {
		this.el.classList.remove(name);
	}
	static removeClass(id, name) {
		new HTMLement(id).removeClass(name);
	}

	clearClasses() {
		this.el.className = "";
	}
	static clearClasses(id) {
		new HTMLement(id).clearClasses();
	}

	setClasses(data) {
		this.clearClasses();
		let list = Object.keys(data).filter(x => data[x]);
		for (let i = 0; i < list.length; i++) this.addClass(list[i]);
	}
	static setClasses(id, data) {
		new HTMLement(id).setClasses(data);
	}

	setVisible(bool) {
		this.el.style.visibility = bool ? "visible" : "hidden";
	}
	static setVisible(id, bool) {
		new HTMLement(id).setVisible(bool);
	}

	setOpacity(value) {
		this.el.style.opacity = value;
	}
	static setOpacity(id, value) {
		new HTMLement(id).setOpacity(value);
	}

	changeStyle(type, input) {
		this.el.style[type] = input;
	}
	static changeStyle(id, type, input) {
		new HTMLement(id).changeStyle(type, input);
	}

	isChecked() {
		return this.el.checked;
	}
	static isChecked(id) {
		return new HTMLement(id).isChecked();
	}

	static allFromClass(name) {
		return Array.from(document.getElementsByClassName(name)).map(x => new HTMLement(x.id));
	}

	setAttribute(name, input) {
		this.el.setAttribute(name, input);
	}
	static setAttribute(id, name, input) {
		new HTMLement(id).setAttribute(name, input);
	}

	setTooltip(input) {
		this.setAttribute("tooltip", input);
	}
	static setTooltip(id, input) {
		new HTMLement(id).setAttribute("tooltip", input);
	}

	setSize(h, w) {
		this.el.style["min-height"] = h + "px";
		this.el.style["min-width"] = w + "px";
	}
	static setSize(id, h, w) {
		new HTMLement(id).setSize(h, w);
	}
}