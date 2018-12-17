import { RegExp } from "regex-rs";

function RustRegExp (pattern) {
    this.re = RegExp.new(pattern)
}

RustRegExp.prototype.test = function test(s) {
    return this.re.test(s)
}

const JsRegExp = window.RegExp

window.RegExp = RustRegExp
