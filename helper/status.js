/**
 * Response object for V(View) after any CRUD operation
 * @param {Boolean} success Boolean value `true` if succeeded
 * @param {Boolean} failure Boolean value `true` if failed
 * @param {String} message Success or failure message
 * @return {Object} Response Object
 */

module.exports.response = (success, failure, message) => {
    return {
        success: success,
        failure: failure,
        message: message
    }
}
