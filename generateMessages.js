const fs = require('fs');
const randomDate = require('random-datetime');
const { LoremIpsum } = require("lorem-ipsum");

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 1,
    min: 1
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});

const messages = {
  it_support: [],
  front_end: [],
  back_end: [],
  dest_support: [],
  digital_marketing: [],
};

const randomIntFromInterval = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const avatars = fs.readdirSync('./public/imgs/avatars');

Object.values(messages).forEach(value => {
  for(let i=0; i<100; i++){
    value.push({
      time: randomDate(),
      pic: `/imgs/avatars/${avatars[randomIntFromInterval(0, avatars.length-1)]}`,
      text: lorem.generateSentences(1),
    });
  }
});


fs.writeFileSync(`public/messages.json`, JSON.stringify(messages, null, 4));