const {RESTDataSource} = require('apollo-datasource-rest');


class SpeakerAPI extends RESTDataSource {
    constructor(){
        super();
        this.baseURL = 'http://localhost:3000/speakers';
    }

    async getSpeakerById(id){
        const speaker = await this.get(`/${id}`);
        return speaker;
    }

    async getSpeakers(){
        const speakers = await this.get('/');
        return speakers;
    }
}

module.exports = SpeakerAPI;