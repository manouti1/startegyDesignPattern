
class game {
    constructor(type) {
        this.type = type;
    }

    getMVP(arr) {
        return this.type.getMVP(arr);
    }
}
module.exports = game;