const HOST = 'https://rsttur.ru/';

/* Собираем get параметры */
const buildURLQuery = (obj: any) =>
      Object.entries(obj)
            .map((pair: any) => pair.map(encodeURIComponent).join('='))
            .join('&');

const request = (url: string, data?: any) => {

    let query;
    const headers = {
        method: 'GET',
    };

    if(data) {
        query = buildURLQuery(data);
    }

    return fetch(`${HOST + url}?${query}`, headers)
        .then((data) => data.json())
        .catch(() => {});
}

export { 
    request
}