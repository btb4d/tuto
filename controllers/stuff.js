const mongoose = require('mongoose');
const Thing = require('../models/thing');

exports.createThing = (req, res, next) => {
	const thing = new Thing({
		...req.body
	});
	thing.save()
		.then(() => res.status(201).json(thing))
		.catch(error => res.status(400).json(error));
};


exports.getAllThings = (req, res, next) => {
	Thing.find()
		.then((things) => res.status(200).json(things))
		.catch(error => res.status(400).json(error));
};

exports.getOneThing = (req, res, next) => {
	Thing.findById(req.params.id)
		.then(thing => res.json(thing))
		.catch(error => res.status(404).json({ error: error }));
};
exports.putOneThing = (req, res, next) => {
	Thing.findByIdAndUpdate(req.params.id, { ...req.body })
		.then(() => res.status(201).json({ message: 'Objet Modifié!' })
			.catch(error => res.status(400).json({ error: error })));
};

exports.deleteOneThing = (req, res, next) => {
	Thing.findByIdAndDelete(req.params.id)
		.then(() => res.json({ message: 'Delete ok!' }))
		.catch(error => res.status(400).json({ error: error }));
};