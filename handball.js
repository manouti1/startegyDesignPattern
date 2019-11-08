
class handball {

    getMVP(arr) {
        var result = [];
        var mvp = {};
        arr.map(itm => {
            var sum = itm.intialRatingPoints + itm.goalsMade * 1 + itm.goalsReceived * 2;
            result.push({ nickName: itm.nickName, sum: sum });
        });
        result.sort((a, b) => (a.sum > b.sum) ? 1 : -1)
        mvp = arr.find(x => x.nickName == result[result.length - 1].nickName);
        return mvp;
    }
}
module.exports = handball;