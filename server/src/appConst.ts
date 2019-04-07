export const appConstant = {
    AppPort : (!isNaN(Number(process.env.PORT)) ? Number(process.env.PORT) : 8080),
    AppHost :`${process.env.HOST || 'http://localhost'}`,
    LoggerLevel: `${process.env.LOG_LEVEL || 'debug'}`,
    MealDBBaseURL: 'https://www.themealdb.com/api/json/v1/1',
};
