

const initialstate = {};

export default function (state = initialstate, action) {
    switch (action.type) {
        case "ADDRESS_LIST":
            return action.payload;

        default:
            return state;
    }
}