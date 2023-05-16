import * as http from './http.js'
import * as view from './view.js';

const GET_CARDS = `https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6`;
//const DRAW_CARDS = `https://www.deckofcardsapi.com/api/deck/${deckid}/draw/?count=2`;
const state = {};

const playGame = async () => {
    const json = await http.sendGETRequest(GET_CARDS);
    console.log(json);
    [state.deal] = json.results;
    view.PlayScene(state);
}

window.start = async () => {
    playGame();
}

window.addEventListener('load', start);