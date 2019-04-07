import axios from 'axios';
import { appConstant } from '../appConst';
import Logger from '../helpers/Logger';

const { MealDBBaseURL } = appConstant;

class MealServices {

        private baseURL: string;

        constructor() {
            this.baseURL = MealDBBaseURL;
        }

    /**
     * Meal services that get meal by ID
     * @param id
     */
    public async getById(id: number): Promise<any> {
        try {
            return await axios.get( `${this.baseURL}/lookup.php?i=${id}`);
        } catch (error) {
            Logger.info(error);
        }
    }

    /**
     * Meal services that get random meal
     */
    public async getRandomMeal(): Promise<any> {
            try {
                return await axios.get( `${this.baseURL}/random.php`);
            } catch (error) {
               Logger.info(error);
            }

    }
}

export default MealServices;
