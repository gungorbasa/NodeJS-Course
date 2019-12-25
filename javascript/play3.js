// Asynchron Functions

const fetchData = callback => {
    setTimeout(() => {
        callback('Done!');
    }, 1500);
};

setTimeout(() => {
    console.log('Timer is done!');
    fetchData(text => {
        console.log(text);
    });
}, 2000);

// Promise
const fetchData2 = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Done2!');
        }, 1500);
    });

    return promise;
};

setTimeout(() => {
    console.log('Timer2 is done!');
    fetchData2().then(text => {
        console.log(text);
    })
}, 1000);