export default class MyPromise extends Promise {
  all(promises) {
    return new Promise((resolve) => {
      let result = [];
      promises.forEach((item) => {
        item.then((res) => {
          result.push(res);
        });
      });
      resolve(result);
    });
  }
}
