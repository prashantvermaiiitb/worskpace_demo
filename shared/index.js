module.exports = {
    /**
     * function to be called in client 
     * @param {*} message 
     */
    client: function (message) {
        console.log("🚀 ~ file: index.js:3 ~ message from client :-", message);
    },
    /**
     * function to be called in server
     * @param {*} message 
     */
    server: function (message) {
        console.log("🚀 ~ file: index.js:6 ~ message from server :-", message);
    }
};