



// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    switch (action.type) {
        case "ADD_MOVIE_WATCHLIST":
            return {
            ...state,
            watchlist: [action.payload, ...state.watchlist],
            };

            case "REMOVE_MOVIE_WATCHLIST": 
            return{
                ...state,
                watchlist: state.watchlist.filter(
                    (movie) => movie.id !== action.payload),
            };

            case "ADD_MOVIE_WATCHED":
                return {
                  ...state,
                  watchlist: state.watchlist.filter(
                    (movie) => movie.id !== action.payload.id
                    ),
                    watched: [action.payload, ...state.watched],
                };

                case "MOVE_TO_WATCHLIST":
                    return {
                        ...state,
                        watched: state.watched.filter(
                            (movie) => movie.id !== action.payload.id),
                        watchlist: [action.payload, ...state.watchlist],
                    };

                    case "REMOVE_FROM_WATCHED":
                        return {
                            ...state,
                            watched: state.watched.filter((movie) => movie.id !== action.payload),
                        };
        default: 
         return state;
    }
};