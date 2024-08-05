// //ACTIVITY 1
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('This message is shown after 2 seconds');
    }, 2000);
});

myPromise
    .then((message) => {
        console.log(message); // "This message is shown after 2 seconds"
    })
    .catch((error) => {
        console.error(error);
    })
    .finally(() => {
        console.log('Promise settled'); // This runs regardless of the outcome
    });

const mynewPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Error message is shown after 2 seconds');
    }, 2000);
});

mynewPromise
    .then((message) => {
        console.log(message); // "This message is shown after 2 seconds"
    })
    .catch((error) => {
        console.error(error);
    })
    .finally(() => {
        console.log('Promise settled'); // This runs regardless of the outcome
    });
//ACTIVITY 2
const fetchData1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Data from server 1');
    }, 1000); // Simulate a 1 second delay
});

const fetchData2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Data from server 2');
    }, 2000); // Simulate a 2 second delay
});

const fetchData3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Data from server 3');
    }, 3000); // Simulate a 3 second delay
});

fetchData1
    .then((result1) => {
        console.log(result1); // Logs: Data from server 1
        return fetchData2;
    })
    .then((result2) => {
        console.log(result2); // Logs: Data from server 2
        return fetchData3;
    })
    .then((result3) => {
        console.log(result3); // Logs: Data from server 3
    })
    .catch((error) => {
        console.error('Error:', error);
    });
// // ACTIVITY 3


const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data fetched successfully');
        }, 2000);
    });
};

const logData = async function () {
    try {
        const data = await fetchData();
        console.log(data);
    } catch (error) {
        console.log('Error', error);
    }
}

logData();

const fetchdata=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject("Error is detected");
        })
    })
}

const logdata = async function () {
    try {
        const data = await fetchdata();
        console.log(data);
    } catch (error) {
        console.log('Error', error);
    }
}
logdata();

//ACTIVITY 4
const fetchData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1'); // Example public API
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };
  
  fetchData();
  
const fetchData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts/1') // Example public API
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error('Fetch error:', error);
      });
  };
  
  fetchData();

//ACTIVITY 5

const fetchData1 = fetch('https://jsonplaceholder.typicode.com/posts/1').then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
  });
  
  const fetchData2 = fetch('https://jsonplaceholder.typicode.com/posts/2').then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
  });
  
  const fetchData3 = fetch('https://jsonplaceholder.typicode.com/posts/3').then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
  });
  
  Promise.all([fetchData1, fetchData2, fetchData3])
    .then((values) => {
      console.log('All fetches resolved');
      values.forEach((value, index) => {
        console.log(`Data from server ${index + 1}:`, value);
      });
    })
    .catch((error) => {
      console.error('Fetch error:', error);
    });
  
Promise.race([fetchData1, fetchData2, fetchData3])
  .then((value) => {
    console.log('First fetch resolved:', value);
  })
  .catch((error) => {
    console.error('Fetch error:', error);
  });