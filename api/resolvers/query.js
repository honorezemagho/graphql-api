module.exports =  {
    sessions: (parent,args, {dataSources},info) => {
        return dataSources.sessionAPI.getSessions(args);
    },
    sessionById: (parent,{id},{dataSources},info) => {
        try{
            return dataSources.sessionAPI.getSessionsById(id);
        }
        catch(error){
            return {code: 'ERROR', message: `An error occured. We are unable to fetch the id ${id}`, token: '1234rfrfth'}
        }
    },
    speakers: (parent, args, {dataSources},info) => {
        return dataSources.speakerAPI.getSpeakers();
    },
    speakerById: (parent, {id},{dataSources}, info) => {
        return dataSources.speakerAPI.getSpeakerById(id);
    }
}