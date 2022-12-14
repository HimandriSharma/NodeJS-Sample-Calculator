module.exports.add = (req, res) => {
	let n1 = req.body.num1;
	let n2 = req.body.num2;
	let sum = n1 + n2;
	// res.send(sum);
    res.json({
        result : sum
    })
	// return sum;
};

module.exports.subtract = (req, res) => {
	let n1 = req.body.num1;
	let n2 = req.body.num2;
	let diff = n1 - n2;
	res.json({
        result : diff
    });
};

module.exports.multiply = (req, res) => {
	let n1 = req.body.num1;
	let n2 = req.body.num2;
	let product = n1 * n2;
	res.json({
        result : product
    });
};
