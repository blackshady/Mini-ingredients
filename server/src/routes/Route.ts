import express, { Router, Request, Response } from 'express';
import Meal from '../controllers/Meal';
import MealValidation from '../middlewares/MealValidation';

class  Route {

    private meal:Meal;

    /**
     * Initialize express router
     */
    constructor(){
        this.router = Router();
        this.init();
    }

    public router:express.Router;

    /**
     * Catch all routes
     * @param _
     * @param res
     */
    private catchAllRoutes(_: Request|any, res: Response): void {
        res.status(404).json({
        message: 'Not Found. Use /api/v1 to access the api',
        });
    }

    private init(){
        this.meal = new Meal();
        const arr = [MealValidation.validateReq, this.meal.getLeastIngredentId];
        this.router.get('/api/v1/meals', this.meal.getRandomId);
        this.router.get('/api/v1/meals/:mealId', ...arr);
        this.router.use('/**', this.catchAllRoutes);
    }
}

export default new Route().router;
