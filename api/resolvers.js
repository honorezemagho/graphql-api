const Query = require('./resolvers/query');
const Session = require('./resolvers/session');
const Mutation = require('./resolvers/mutation');

module.exports = {
    Query,
    Session,
    Mutation,
    Room : {
        EUROPA: 'Europa',
        SOL: 'Sol',
        SATURN: 'Saturn'
    },
    SessionOrError: {
        //Method call by apollo to resolve the type
        __resolveType(obj){
            if(obj.code){
                return 'Error'
            }
            else{
                return 'Session'
            }
        }
    }
}