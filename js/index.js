import * as wasm from "regex-rs";

window.test = wasm.regex_test
const JsRegExp = window.RegExp

class RustRegExp {
    constructor(pattern) {
        this.pattern = pattern

        // TODO: For now, delegate missing methods to native a native RegExp instance.
    }

    test(str) {
        return wasm.regex_test(this.pattern, str)
    }
}

window.RegExp = RustRegEx
