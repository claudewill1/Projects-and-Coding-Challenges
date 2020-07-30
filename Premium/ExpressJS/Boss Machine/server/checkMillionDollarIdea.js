const checkMillionDollarIdea = (req,res,next) => {
    const { numberWeeks, weeklyRevenue } = req.body;
    const totalMoney = Number(numberWeeks) * Number(weeklyRevenue);
    if(!numberWeeks || !weeklyRevenue || isNaN(totalMoney) || totalMoney < 1000000){
        res.status(400).send();
    } else {
        next();
    }

};

// Leave this exports assignment so that the function can be used elsewhere
module.exports = checkMillionDollarIdea;
