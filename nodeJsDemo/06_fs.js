const fs = require('fs');

const result = fs.readFile('./06_fs.fjs', (err, data) => {
	if (err){
		console.log(err);
	} else {
		console.log(data.toString());
	}
});
console.log(result);