export const appConstant = {
    AppHost : `${process.env.HOST || 'http://localhost'}`,
    AppPorrt : (!isNaN(Number(process.env.PORT)) ? Number(process.env.PORT) : 8080),
    AppPort: Number(process.env.PORT) || 8080,
    LoggerLevel: `${process.env.LOG_LEVEL || 'debug'}`,
    MealDBBaseURL: 'https://www.themealdb.com/api/json/v1/1',
};
