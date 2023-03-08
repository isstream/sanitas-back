/* All Require */
const { Photos } = require('./photos.controller');


/* Get Photos */
exports.getPhotos = (req, res) => {
    movie  = new Photos();
    movie.getPhotos(req.params.page, (state, response)=>{
        res.status(200).send({ state: state, response: response });    
    });
};