// This file is used to disable the debugger in the browser.
// It is used to prevent the debugger from being triggered accidentally.
// It is not recommended to use this in production environment.
setInterval(() => {
    (function (a) {
        return (function (a) {
            return (Function('Function(arguments[0]+"' + a + '")()'))
        }
        )(a)
    }
    )('bugger')('de', 0, 0, 0);
}, 1000);
