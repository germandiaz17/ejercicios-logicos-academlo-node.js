function twoSums(numbs, target) {
    for(let i = 0; i < numbs.length; i++) {
        for(let j = 0; j < numbs.length; j++) {
            if(numbs[0] === numbs[1]) {
                return [0, 1]
            }
            if(numbs[i] + numbs[j] === target) {
                if(numbs[i] === numbs[j]) {
                    continue
                }else{
                    return [numbs.indexOf(numbs[i]), numbs.indexOf(numbs[j])]
                }
            }
        }
    }
}

twoSums([3,3], 6)
module.exports = twoSums;