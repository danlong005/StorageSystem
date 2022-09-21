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
        newBin.items = newBin.items.map(item => {
            return {
                name: item
            }
        });

        console.log(newBin);

        return await Bin.create(newBin, {
            include: [Item]
        });
    } catch (error) {
        console.log(`Error: ${error}`);
        return {};
    }
}

module.exports = {
    getBins,
    getBinById,
    createBin
}