# Challenge

- The challenge lasts for up to 3 days - counting from the time the repository invitation was sent (it's okay if you need a little more time);
- The whole challenge is in english, so read it carefully;
- Test instructions are inside the `instructions` directory;
- Only code present in the `main` branch will be considered;
- You can use whatever programming language you want!

And finally, we hope you do your best 🥇

# Thanks for the opportunity 

  - Language Used => `JavaScript` with your superset `TypeScript`
  - Runtime Environment => `Node.js` with a `Express.js` framework
  - Documentation => `Swagger.js` for rest api
  - Javascript linting => `ESLint`
  - Tests Framework => `Jest`
  - Software Engineering Principles => `DDD`, `SOLID`, `TDD`, `Clean architecture`, `Design Pattern` 
  - Framework Front-End => `React.js` with Vite

  Application configured to be accessed through: http://localhost:3333
  React configured to be accessed in `/test/` to run: `npm run dev`

  - The simulation routes are responsible for question 1

     through the `post` method, the minimum value of the password will be sent, the maximum value, and finally which rules will be active  

     ```javascript
        {minValue: 184759, maxValue: 856920, rules: [1,1,1]}
     ```

     There are 3 rule options, the first (one double), the second (left to right, the digits only increase or remain the same). Which are all from Part 1
     
     And the last one from Part 2 (must have at least one group of exactly two of the same characters)

     ```javascript
        {rules: [1/*to active*/, 0/*to disable*/, 1]}
     ```

     I elaborated the system, because I identified a necessary control of the application, for the scalability of the solution based on possible future problems, such as the one that appeared in Part 2

     Through the `get` method, it will bring up an array of simulations with the numbers of possible passwords existing between the rules

     or execute React.js and access the simulations route via browser

     ![Simulations Home](https://github.com/guitartarotti/test-javascript/blob/main/simulations-home.PNG)

     ![Open Simulation](https://github.com/guitartarotti/test-javascript/blob/main/simulation.PNG)

  - The command route are responsible for question 2

    only 1 `get` method, it will bring the address number


  - Don't worry, all routes are documented in swagger and can be accessed via: http://localhost:3333/api-docs/

  - All settings are also saved and documented, from TypeScript with ESLint to Jest

  - To run: `npm run dev`, to test: `npm run test`


  PS: I am available to explain everything that has been coded (In fact, I think the best way to present) ;)