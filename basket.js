
class basketball {

    getMVP(arr) {
        var result = [];
        var mvp = {};
        arr.map(itm => {
            var sum = itm.scoredPoints * 2 + itm.rebounds * 1 + itm.assists * 3;
            result.push({ nickName: itm.nickName, sum: sum });
        });
        result.sort((a, b) => (a.sum > b.sum) ? 1 : -1)

        mvp = arr.find(x => x.nickName == result[result.length - 1].nickName);

        return mvp;
    }
}
module.exports = basketball;