const task = require('../models/task');
const Task = require('../models/task');

module.exports = function(app) {
    app.get('/api/task', async (req, res) => {
        const tasks = await Task.find();
        res.json(tasks);
    });

    app.get('/api/task/:id', async (req, res) => {
        const task = await Task.findById(req.params.id);
        res.json(task);
    });

    app.post('/api/task', async (req, res) => {
        //console.log(req.body);
        const { title, description} = req.body;
        const task = new Task({
            title,
            description
        });
        await task.save();
        res.json({status: 'Task Saved'});
    });

    app.put('/api/task/:id', async (req, res) => {
        //console.log(req.body);
        const { title, description} = req.body;
        const newTask = { title, description};
        await Task.findByIdAndUpdate(req.params.id, newTask);

        res.json({status: 'Task Updated'});
       
    });

    app.delete('/api/task/:id', async (req, res) => {
       
        await Task.findByIdAndRemove(req.params.id);

        res.json({status: 'Task Deleted'});
       
    });
}