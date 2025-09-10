const { StatusCodes } = require("http-status-codes");
const { ErrorResponse } = require("../utils/common");
const AppError = require("../utils/errors/appError");

async function validateCreateTicket(req, res, next){
    const { subject, content, recipientEmail } = req.body;
    
    if(subject && content && recipientEmail){
        next();
    }else{
        let explanation = [];
        if(!subject){
            explanation.push('Subject is required');
        }
        if(!content){
            explanation.push('Content is required');
        }
        if(!recipientEmail){
            explanation.push('Recipient email is required');
        }
        ErrorResponse.error = new AppError(explanation, StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
}

module.exports = {
    validateCreateTicket
}