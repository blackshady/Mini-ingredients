
class Filter{

    public mealIdSterilization(meal:any){
        const { meals: [{idMeal: mealId}]} = meal;
        return mealId;
    }

    public mealSterilization(meal:any){
        const {meals } = meal;
        return meals[0];
    }

    /**
     * compute the least ingredient of a meal
     * @param meals
     */
    public leastIngredentId(meals:any){
        let allMealIds = [];
        for(let meal of meals){

            const Ids = Object.keys(meal).filter((el)=>{
                return el.startsWith('strIngredient') && meal[el] !== '' && meal.idMeal;
            }).map((el)=>meal['idMeal']);
            allMealIds.push(Ids);
        }
        let leastId = allMealIds[0].length;
        let leastMeal;
        for(let ids of allMealIds ){
            if(ids.length<= leastId){
                leastId = ids.length;
                leastMeal = ids
            }
        }
        return leastMeal[0] ;
    }
}

export default Filter;
