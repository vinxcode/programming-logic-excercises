/*
Peter enjoys taking risks, and this time he has decided to take it up a notch!

Peter asks his local barman to pour him n shots, after which Peter then puts laxatives
in x of them. He then turns around and lets the barman shuffle the shots. Peter approaches 
the shots and drinks a of them one at a time. Just one shot is enough to give Peter a runny tummy. 
What is the probability that Peter doesn't need to run to the loo?
*/

function getChance(n, x, a) {
    if (!(n < a || n < x)) {
        if((a+x)===n){
            return parseFloat((x / n).toFixed(2))
        } else {
            return parseFloat((((n-x)/n) ** a).toFixed(2))
        }
    }
}

console.log(getChance(10,5,5))