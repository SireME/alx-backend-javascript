export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // location for sample assyncronous operation example below
    setTimeout(() => {
      const Sstatus = true;
      if (Sstatus) {
        resolve('API response data');
      } else {
        reject(Error('Sorry could not get API'));
      }
    }, 1000);
  });
}
