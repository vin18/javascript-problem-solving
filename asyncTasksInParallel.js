const createAsyncTask = function(id) {
	const value = Math.floor(Math.random() * 9);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
			if (value > 5) resolve(`Resolve: ${value * 1000}`)
			else reject(`Error: ${value * 1000}`)
		}, 500 * value) 
  });
}

const asyncTasks = [createAsyncTask(1), createAsyncTask(2), createAsyncTask(3), createAsyncTask(4), createAsyncTask(5), createAsyncTask(6)];

function asyncTasksInParallel(asyncTasks, callback) {
	const results = [];
	const errors = [];
	let completed = 0;
	
	asyncTasks.forEach(asyncTask => {
		asyncTask
			.then(res => results.push(res))
			.catch(err => errors.push(err))
			.finally(() => {
				completed++;
				if (asyncTasks.length === completed) callback(errors, results);
			})
	})
}

asyncTasksInParallel(asyncTasks, (errors, results) => {
	console.log(results);
	console.log(errors);
})

