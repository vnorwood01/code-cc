router.route('/bootcamps')
.get(function(req, res) {
    procedures.all()
    .then(function(bootcamps) {
        res.send(bootcamps);
    }).catch(function(err) {
        console.log(err);
        res.sendStatus(500);
    });
})
.post(function(req, res) {
    var b = req.body;
    procedures.create(b.name, b.stack, b.city, b.cost, b.userid, b.categoryid)
    .then(function(id) {
        res.status(201).send(id);
    }).catch(function(err) {
        console.log(err);
        res.sendStatus(500);
    });
});

// the /api/bootcamps/:id
router.route('/:id')
.get(function(req, res) {
    procedures.read(req.params.id)
    .then(function(bootcamps) {
        res.send(bootcamps);
    }).catch(function(err) {
        console.log(err);
        res.sendStatus(500);
    });
})

// PERHAPS THIS SHOULD BE ADMIN ONLY CONNOR?
.put(function(req, res) {
    procedures.update(req.params.id, req.body.name, req.body.stack, req.body.city, req.body.cost, req.body.categoryid)
    .then(function() {
        res.sendStatus(204);
    }).catch(function(err) {
        console.log(err);
        res.sendStatus(500);
    });
})
.delete(function(req, res) {
    procedures.destroy(req.params.id)
    .then(function() {
        res.sendStatus(204);
    }).catch(function(err) {
        console.log(err);
        res.sendStatus(500);
    });
});

module.exports = router;