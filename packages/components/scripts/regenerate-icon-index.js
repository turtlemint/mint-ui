const path = require("path");
const fs = require("fs");

const filePath = path.join("src", "icons");
const fileName = "index.js";

fs.readFile(`${filePath}/${fileName}`, "utf8", (err, data) => {
	if (err) throw err;
	const newStr = data.replace(/.tsx/g, "");
	fs.writeFile(`${filePath}/${fileName}`, newStr, writeErr => {
		if (writeErr) throw err;
		fs.rename(`${filePath}/${fileName}`, `${filePath}/index.ts`, renameErr => {
			if (renameErr) throw renameErr;
			console.log("rename completed");
		});
	});
});
