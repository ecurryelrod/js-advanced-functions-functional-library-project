const objectOrArray = (collection) => {
    return collection instanceof Array ? collection.slice() : Object.values(collection);
}

const myEach = (collection, callback) => {
    const newCollection = objectOrArray(collection);
    for (let i = 0; i < newCollection.length; i++) {
        callback(newCollection[i]);
    }
    return collection;
}

const myMap = (collection, callback) => {
    const newCollection = objectOrArray(collection);
    const newArray = [];

    for (let i = 0; i < newCollection.length; i++) {
        newArray.push(callback(newCollection[i]));
    }
    return newArray;
}

const myReduce = (collection, callback, acc) => {
    let newCollection = objectOrArray(collection);

    if (!acc) {
        acc = newCollection[0];
        newCollection = newCollection.slice(1);
    }

    for (let i = 0; i < newCollection.length; i++) {
        acc = callback(acc, newCollection[i], newCollection);
    }
    return acc;
}

const myFind = (collection, predicate) => {
    const newCollection = objectOrArray(collection);

    for (let i = 0; i < newCollection.length; i++) {
        if (predicate(newCollection[i])) return newCollection[i]
    }
    return undefined
}

const myFilter = (collection, predicate) => {
    const newCollection = objectOrArray(collection);
    const newArray = [];

    for (let i = 0; i < newCollection.length; i++) {
        if (predicate(newCollection[i])) newArray.push(newCollection[i])
    }
    return newArray
}

const mySize = (collection) => {
    const newCollection = objectOrArray(collection);
    return newCollection.length;
}

const myFirst = (array, n) => {
    return n ? array.slice(0, n) : array[0]
}

const myLast = (array, n) => {
    return n ? array.slice(-n) : array[array.length - 1]
}

const myKeys = (object) => {
    const keys = [];
     for (let key in object) {
         keys.push(key)
     }
     return keys
}

const myValues = (object) => {
    const values = [];

    for (let key in object) {
        values.push(object[key])
    }
    return values
}