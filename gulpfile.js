const defaultTask = (cb) => {
    console.log('in default task.');
    cb();
}

const otherTask = (cb) => {
    console.log('in other task.');
    cb();
}

const anotherTask = (cb) => {
    console.log('in another task.');
    cb();
}

// define default task.
module.exports.default = exports.default = defaultTask;
// define other task.
module.exports.other = exports.other = otherTask;
// define another task.
module.exports.another = exports.another = anotherTask;

// To run
//
// - FOR DEFAULT TASK
// >.\node_modules\.bin\gulp
//
// - FOR OTHER and ANOTHER tasks
// >.\node_modules\.bin\gulp other another