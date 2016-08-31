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
			Todo.destroy({id: taskID}, function(err, resObj){
				if(err){
					res.negotiate(err);
				}else{
					res.send(resObj);
				}
			});
		}
	},

	updateList: function (req, res) {
		var taskID = req.param('id');
		var task = req.param('task');
		if(taskID && taskID !== undefined && task && task !== undefined){
			Todo.update({id: taskID}, {todo: task}, function(err, resObj){
				if(err){
					res.negotiate(err);
				}else{
					res.send(resObj);
				}
			});
		}
	}
};

