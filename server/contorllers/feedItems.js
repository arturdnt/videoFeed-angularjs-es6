const mock = require('../data/mock')

const all = (req, res) => {
    res.send(mock);
};

const filter = (req, res) => {
    const filter = req.params.resourceType.toLowerCase();
    res.send(filter !== 'all' ? mock.filter(item => (item.source === filter)) : mock);
};

module.exports = {
    all,
    filter,
}