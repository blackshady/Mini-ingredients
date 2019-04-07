import {Request, Response} from 'express'
import MealServices from '../services/MealServices';
import Filter from '../utils/Filter';

class Meal {
    private  mealService:any;
    private filter:Filter;

    constructor(){
       // This will be converted to use dependency injection
       this.mealService = new MealServices();
       this.filter= new Filter();
    }


    public  getLeastIngredentId = async ( req:Request, res: Response) => {
        const {mealId} = req.params;
        const mealIdArr = mealId.split(',');
        const allMeals: any[] = [];

        for(let id of mealIdArr){
            const response =  await this.mealService.getById(Number(id));
            const {data, data:{meals}} = response;
            if(meals === null){
                return res.status(400).json({status: 'error',message: 'Bad request'})
            }
            allMeals.push( this.filter.mealSterilization(data));
        }
       const leastMealId = this.filter.leastIngredentId(allMeals);

        return res.status(200).json({
            status:'success',
            message: 'Meal Id with least ingredient',
            mealId: leastMealId
         });
    };

    public getRandomId = async  (_:Request, res: Response) => {
       const response = await this.mealService.getRandomMeal();
       const {data} = response;
       const mealId = this.filter.mealIdSterilization(data)
       return res.status(200).json({
           status:'success',
           message: 'Random meal id',
           mealId,
       })
    };

}

export default Meal;
