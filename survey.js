const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const answers = [];

rl.question('What\'s your name? Nicknames are also acceptable :)', (answer) => {
  answers.push(answer);
  rl.question('What\'s an activity you like doing? ', (answer) => {
    answers.push(answer);
    rl.question('What do you listen to while doing that? ', (answer) => {
      answers.push(answer);
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (answer) => {
        answers.push(answer);
        rl.question('What\'s your favourite thing to eat for that meal? ', (answer) => {
          answers.push(answer);
          rl.question('Which sport is your absolute favourite? ', (answer) => {
            answers.push(answer);
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer) => {
              answers.push(answer);
              rl.close();

              const name_nick = answers[0];
              const fav_activity = answers[1];
              const fav_music = answers[2];
              const fav_meal = answers[3];
              const fav_food = answers[4];
              const fav_sport = answers[5];
              const fav_superpower = answers[6];
              
              console.log();
              console.log(`--------------Hey ${name_nick}!! Your profile is:--------------`);
              console.log(`My name is ${name_nick} and I really like ${fav_activity}. I listen to ${fav_music} while eating ${fav_food} during my ${fav_meal} and ${fav_sport} is my absolute favourite sport.`);
              console.log(`${fav_superpower} is my superpower.`);
            });
          });
        });
      });
    });
  });
});