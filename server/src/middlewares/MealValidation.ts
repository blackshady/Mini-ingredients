import {Request, Response, NextFunction} from 'express'

class MealValidation{

    public static validateReq(req:Request, res:Response, next:NextFunction){
        const {mealId} = req.params;

        return !isNaN(Number(mealId.replace(/,/gi, ''))) ? next() :
            res.status(400).json({
                 status: 'error',
                 message: 'Bad request, params should be a number',
            });
    }


}

export default MealValidation;
