// map
function mapToNegativize(sourceArray) {
	const newArray = [];
	for (let i in sourceArray) {
		newArray[i] = -sourceArray[i];
	}
	return newArray;
}

function mapToNoChange(sourceArray) {
	return sourceArray;
}

function mapToDouble(sourceArray) {
	const newArray = [];
	for (let i in sourceArray) {
		newArray[i] = sourceArray[i] * 2;
	}
	return newArray;
}

function mapToSquare(sourceArray) {
	const newArray = [];
	for (let i in sourceArray) {
		newArray[i] = sourceArray[i] ** 2;
	}
	return newArray;
}

// reduce
function reduceToTotal(sourceArray, newTotal=0) {
	for (const e of sourceArray) {
		newTotal += e;
	}
	return newTotal;
}

function reduceToAllTrue(sourceArray) {
	for (const e of sourceArray) {
		if (e) {
		} else {
			return false;
		}
	}
	return true;
}

function reduceToAnyTrue(sourceArray) {
	for (const e of sourceArray) {
		if (e) {
			return true;
		}
	}
	return false;
}