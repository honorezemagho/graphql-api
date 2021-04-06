const sessions = require('../data/sessions.json');
const { DataSource } = require('apollo-datasource');
const _ = require('lodash');

class SessionAPI extends DataSource{
    constructor(){
        super()
    }

    initialize(config){

    }

    getSessions(args){
        return _.filter(sessions, args);
    }

    getSessionsById(id){
        let session =  _.filter(sessions, {id:parseInt(id)} );
        return session[0];
    }

    toggleFavoriteSession(id){
        let session = _.filter(sessions, {id:parseInt(id)});
        session[0].favorite = !session[0].favorite;
        return session[0];
    }

     generateId = function() {
        return (((1+Math.random())*0x10000)|0);
     }

    async addSession(session)
    {
        session.id = await this.generateId();
        sessions.push(session);
        return session;
        
    }

}

module.exports = SessionAPI;