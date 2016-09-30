Promise.wait = function(promises) {

  function resolveConvertor(promise) {

    return promise
      .then(
        (value) => {
          return {
            status: 'resolved',
            value:  value,
          }
        },
        (error) => {
          return {
            status: 'rejected',
            value:  error
          }
        }
      )
  }

  return Promise.all(promises.map(resolveConvertor));
}

let promise01 = new Promise((res, rej) => { setTimeout(() => { res('resolve') },  1200) });
let promise02 = new Promise((res, rej) => { setTimeout(() => { res('resolve') },  1200) });
let promise03 = new Promise((res, rej) => { setTimeout(() => { rej('rejected') }, 2000) });

Promise
  .wait([promise01, promise02, promise03])
  .then(
    (all) => { console.log(all) }
  );
