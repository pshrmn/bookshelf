export default function bookLoader(url) {
  return new Promise((resolve, reject) => {
    let req = new XMLHttpRequest();
    req.open('GET', url);
    req.responseType = 'json';
    req.onload = () => {
      if ( req.status === 200 ) {
        resolve(req.response);
      } else {
        reject(Error(`Failed to load books from url ${url}`));
      }
    };

    req.onerror = () => {
      reject(Error(`Network error loading ${url}`));
    };
    req.send();
  });
}
