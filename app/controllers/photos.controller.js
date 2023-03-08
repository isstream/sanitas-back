/* All Require */
var request = require('request');
var LoremIpsum = require('lorem-ipsum').loremIpsum;


/* Class Movies */
class Photos {
    url;
    subfix;
    lorem;

    constructor(){
        /* Token for Request Movies */
        this.url = 'https://picsum.photos/id/';
        this.subfix = '/500/500.jpg';
        this.lorem = new LoremIpsum({
          sentencesPerParagraph: {
            max: 8,
            min: 4
          },
          wordsPerSentence: {
            max: 16,
            min: 4
          }
        });
    }

    /* Get billboard Movies */
    getPhotos(page, cb){
        if(!this.isNumeric(page)){
            return cb(false, null)
        }
        const _randomPhotos = this.randomPhotos();
        cb(true, _randomPhotos);
    }

    /* Functions Generals */
    isNumeric(value) {
      return /^-?\d+$/.test(value);
    }
    randomPhotos(){
      const photos = [];
      for (let index = 1; index < 4000; index++) {
        const time = new Date().getTime();
        photos.push({
          id: index,
          photo: this.url + index + this.subfix,
          text: LoremIpsum(2)
        });
      }
      return photos;
    }
    makeName() {
      let result = '';
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      const charactersLength = characters.length;
      let counter = 0;
      while (counter < 15) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
      }
      return result;
  }
    /* End Functions Generals */
}

/* Export Class */
module.exports = { Photos };