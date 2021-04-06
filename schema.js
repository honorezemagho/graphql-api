const {gql} = require('apollo-server');

module.exports = gql`

type Query {
    sessions(
    id:ID,
    title: String,
    description: String,
    startsAt:String,
    endsAt: String,
    room: Room,
    day:String,
    format:String,
    track:String,
    level:String
    ): [Session],
    sessionById(id:ID): Session,
    speakers: [Speaker],
    speakerById(id:ID): Speaker
}

type Session {
    id:ID!,
    title: String!,
    description: String,
    startsAt:String,
    endsAt: String,
    room: String,
    day:String,
    format:String,
    track:String @deprecated(reason:"Too many sessions do not fit into a single track, we will be migrating to a tags based system in the future..."),
    level:String,
    favorite: String,
    speakers: [Speaker]
}

enum Room {
    EUROPA
    SOL
    SATURN
}
type Mutation{
    toggleFavoriteSession(id:ID): Session,
    addNewSession(session: SessionInput): Session
}

type Speaker{
    id:ID!,
    name:String,
    bio: String,
    sessions:[Session]
}

input SessionInput {
    title: String!
    description: String
    startsAt:String
    endsAt: String
    room: Room
    day:String
    format:String
    track:String
    level:String
    favorite: String
}
`;
