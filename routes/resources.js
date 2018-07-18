const mongoose = require('mongoose');

module.exports = app => {

	app.get('/icon', (req, res) => {

	fs = require('fs');
    fs.readFile('/path/to/an/image/directory/' + pic, function (err, content) {
        if (err) {
            res.writeHead(400, {'Content-type':'text/html'})
            console.log(err);
            res.end("No such image");    
        } else {
            //specify the content type in the response will be an image
            res.writeHead(200,{'Content-type':'image/png'});
            res.end(content);
        }
    });




		placesModel
			.find({})
			.then( places => res.json(places) , error => res.status(500).json(error));
	});
}