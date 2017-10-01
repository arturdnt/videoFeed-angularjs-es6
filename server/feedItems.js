const mock = require('./mock')

module.exports = {
    all: (req, res) => {
        res.send(mock);
    },
    filter: (req, res)=>{
        const filter = req.params.resourceType.toLowerCase();
        res.send(filter !== 'all' ? mock.filter(item=>(item.source === filter)):mock);
    }
}