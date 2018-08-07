export default (elId?: string) => {
    var old = console.log;
    var logger = document.getElementById(elId || 'log');
    var oldLogger = console.log;
    console.log = (message) => {
        oldLogger(message);
        if (typeof message == 'object') {
            logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(message) : message) + '<br />' + '<br />';
        } else {
            logger.innerHTML += message + '<br />' + '<br />';
        }
    }
};
