
/** Request Response
 *
 * @param {number} code response status code
 * @param {string} message response message
 *  @param {object} data response Data
 */
export function requestResponse(code: any, message: any, data: any) {
    var responseObj = {
        code: code,
        message: message,
        data: data,
    };
    return responseObj;
}

/** Send Error Response
 *
 * @param {string} res response
 *  @param {object} err response
 */
export function sendError(res: any, err: any) {
    if (!err.code) {
        return res.status(500).json({
            code: 500,
            message: "Internal server err",
            data: null,
        });
    }

    return res.status(err.code).json({
        code: err.code,
        message: err.message,
        data: err.data,
    });
}

/** Send Success response
 *
 * @param {string} res response 
 *  @param {object} result response result
 */
export function sendSuccess(res: any, result: any) {
    return res.status(result.code).json({
        code: result.code,
        message: result.message,
        data: result.data,
    });
}