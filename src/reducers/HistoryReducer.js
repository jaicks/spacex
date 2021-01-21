

const initialstate = {};

export default function (state = initialstate, action) {
    switch (action.type) {
        case "HISTORY_LIST":
            return action.payload;

        default:
            return state;
    }
}