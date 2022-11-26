const { Bin, Item } = require('../models');

async function getBins() {
    try {
        return await Bin.findAll({include: Item});
    } catch (error) {
        console.log(`Error: ${error}`);
        return [];
    }
}

async function getBinById(id) {
    try {
        return await Bin.findByPk(id, {include: Item});
    } catch (error) {
        console.log(`Error: ${error}`);
        return {};
    }
}

async function createBin(newBin) {
    try {
        if (Array.isArray(newBin.items)) {
            newBin.items = newBin.items.map(item => {
                return {
                    name: item
                }
            });
        } else {
            newBin.items = [{
                name: newBin.items
            }];
        }

        console.log(newBin);

        return await Bin.create(newBin, {
            include: [Item]
        });
    } catch (error) {
        console.log(`Error: ${error}`);
        return {};
    }
}

async function searchBins(userId, search) {
    // let q = `%${search}%`;
    // const [items, metadata] = await sequelize.query(
    //     `SELECT i.name, b.name FROM bins AS b JOIN items AS i
    //         on i."binId" == b.id
    //      WHERE b."userId" == ${userId}
    //      AND   i.name like ${q}`);
    //
    // return items;

    return [];
}

module.exports = {
    getBins,
    getBinById,
    createBin,
    searchBins
}