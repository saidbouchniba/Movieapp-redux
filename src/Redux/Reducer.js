import { ADDMOVIE, DELETEMOVIE, EDITMOVIE, GETMOVIE } from "./Actiontype"

const initialState = {
    movies: [
        {
            title: "the union",
            poster: "https://fr.web.img2.acsta.net/img/1a/cf/1acf15b487da4c73d0bca4cc3a80e971.jpg",
            rating: 5,
            actors: ["Mark Wahlberg", "Halle Berry"],
            describe: "Mike McKenna is a construction worker living in New Jersey . One night in a bar, he meets Roxanne Hall, his high school girlfriend. She will introduce him to the world of spies and make him work for the government.",
            trailer: "https://www.youtube.com/embed/vea9SdnRMyg?si=uHzOZ1RJFxTtRPkj",
            id: 1
        },
        {
            title: "rebel ridge",
            poster: "https://dnm.nflximg.net/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABaSWW48t0IluMnNMUonTWQgWcAlj8wyBOu2HYjiNTyy406d8vAGtfcUMq2M0qMGVSng0NUQQn5rP4QCE_ElHCt6M3F62W05Ksc7-Mo1OGv4rcu1vGBk9HaL5HPUR-AVB8MZXVg.jpg?r=488",
            rating: 4.5,
            actors: ["Aaron Pierre", "AnnaSophia Robb"],
            describe: "Terry Richmond, a former Marine, goes to the town of Shelby Springs to post bail for his cousin's release. But all of Terry's savings are unjustly seized by the local police led by the corrupt chief, Sandy Burnne. Terry will, however, be able to count on the help of the clerk Summer McBride. They will uncover a vast widespread conspiracy within Shelby Springs. Terry will try everything to recover the bail money.",
            trailer: "https://www.youtube.com/embed/gF3gZicntIw?si=4Xun3h8Qa4QNWmpH",
            id: 2
        },
        {

            title: "incoming",
            poster: "https://m.media-amazon.com/images/M/MV5BNTkyNzA5YmMtZjE3ZC00YjljLThkNDQtZGI0NWEyZmZkZTNlXkEyXkFqcGc@._V1_.jpg",
            rating: 3.5,
            actors: ["Mason Thames", "Isabella Ferreira"],
            describe: "Four new students face the terrors of adolescence at their very first high school party.",
            trailer: "https://www.youtube.com/embed/elA7XuEUxOo?si=MpayAqM6IPHq-PWQ",
            id: 3
        }
    ],
    movie:null
}

export const Moviereducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case ADDMOVIE:
            return { ...state, movies: [...state.movies, payload] }
        case DELETEMOVIE:
            return {
                ...state, movies: state.movies.filter(movie => movie.id != payload)
            }
        case EDITMOVIE:
            return { ...state, movies: state.movies.map(movie => movie.id === payload.id ? movie = payload.data : movie) }
            case GETMOVIE:
                return{...state,movie:state.movies.find(el=>el.id==payload)}
        default:
            return state
    }
}
