const fs = require("fs").promises;

async function makeRatingFile(path, array) {
    const raitingFile = await fs.readFile(path, "utf8");
    const raitingArray = JSON.parse(raitingFile);
    raitingArray.forEach((item) => {
        if (!raitingArray.find((el) => el.id === item.id)) {
            let obj = {
                id: item.id,
                title: item.title,
                image: item.image,
                link: item.link,
                description: item.description,
                rating: 0,
            };
            raitingArray.push(obj);
        }
    });
    await fs.writeFile(path, JSON.stringify(raitingArray));
}

module.exports = makeRatingFile;

