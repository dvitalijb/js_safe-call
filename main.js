function safeCall(f) {
    try {
        f();
        return true;
    } catch (e) {
        return false;
    }
}

Function.prototype.safeCall = function() {
    try {
        this();
        return true;
    } catch (e) {
        console.error(e)
        return null;
    }
};
