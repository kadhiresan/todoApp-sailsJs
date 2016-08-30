/**
 * TodoController
 *
 * @description :: Server-side logic for managing todoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	add: function (req, res) {
		var task = req.param('task');

		if(task && task !== undefined && task !== ''){
			Todo.create({todo: task}, function(err, resObj){
				if(err){
					res.negotiate(err);
				}else{
					res.send(resObj);
				}
			});
		}
	},

	getMyToDOList: function (req, res) {
		Todo.find({}, function(err, resObj){
			if(err){
				res.negotiate(err);
			}else{
				res.send(resObj);
			}
		});
	},

	deleteList: function (req, res) {
		var taskID = req.param('id');
		if(taskID && taskID !== undefined){
			sails.log("deleteList= ", taskID);
			Todo.destroy({id: taskID}, function(err, resObj){
				if(err){
					res.negotiate(err);
				}else{
					res.send(resObj);
				}
			});

			// // remove 
			// Todo.destroy({id: taskID}).then(function(u){
			//     console.log(u); // the Todo was remove successfully 
			// });
		}
	}
};

