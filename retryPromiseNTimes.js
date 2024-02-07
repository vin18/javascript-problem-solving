// Function to retry promise for N number of times
async function retry(fn, retries) {
	try {
		await fn();
		return Promise.resolve("I am resolved");
	} catch (err) {
		if (retries === 0) return Promise.reject("Error");
		console.log(`API failed. Retrying..`, retries);
		return retry(fn, retries - 1);
	}
}

const fn = () => Promise.reject();
retry(fn, 5)
	.then(data => console.log(data))
	.catch(err => console.log(err));
