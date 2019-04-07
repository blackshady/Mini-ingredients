# Mini-ingredients

A robust API that compute the least ingredients required to prepare a meal

## Description

**Mini-ingredients** is the a solution that consume the mealDB.com ApI to compute the least ingredient for a meal  .

## Table of Contents

- [Documentation](#documentation)
- [Setup](#setup)
- [Contribute](#contribute)
- [Deployment](#deployment)
- [License](#license)

## Documentation

## Working Routes
|	Endpoint	         |          Functionality         |
|------------------------|:------------------------------:|
|GET /meals              | Fetch random meal              |   
|GET /meals/:mealId      | Return Id of least ingredient  |


## Setup

### Dependencies

- [NodeJS](https://github.com/nodejs/node) - A JavaScript runtime environment
- [Express](https://github.com/expressjs/express) - A web application framework for NodeJS

### Getting Started

Follow these steps to set up the project in development mode

- Install [Nodejs](https://nodejs.org/en/download/)
- Clone the repository by running the command

  ```[bash]
  git clone https://github.com/blackshady/Mini-ingredients.git
  ```

- Run `cd Mini-ingredients` to enter the application's directory
- Install the application's dependencies by running the command
  ```[bash]
  yarn install
  ```
- Create a `.env` file in the root of your directory using the `.env.example` file in the repository
- Start the application by running

  ```[bash]
  yarn run start
  ```
  The application should now be running at `http://localhost:8080`
  
  - You can generate random meal id by the endpoint 
  
  ```[bash]
  http://localhost:8080/api/v1/meals
  ```
  
   - To get the meal id for the meal with the least ingredent 
   
 ```[bash]
 http://localhost:8080/api/v1/meals/52774,52902,52882
 ```
  

### Run the Service Using Docker

> NOTE: Make sure no service is running on port 5000.

To run the application just type: `make start`

this would run your application inside a container which you can easily access using `localhost:5000`.

To stop the application, you can just hit `^c`.

To delete the containers: `make stop`

To cleanup all the containers + volumes: `make clean`

## Deployment

TODO - add deployment commands

## Sample



