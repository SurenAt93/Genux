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
