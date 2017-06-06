import base64 from 'base-64';

const postData = (todo, func) => {
  const credentials = base64.encode('hmccain:droopyjuice');

  fetch(
    '/entity/node?_format=hal_json', {
      method: 'POST',
      headers: {
        'Content-type': 'application/hal+json',
        'Authorization': `basic ${credentials}`
      },
      body: JSON.stringify({
        "_links": {
          "self": {
            "href": "http://tewdew:8888/entity/node"
          },
          "type": {
            "href": "http://tewdew:8888/rest/type/node/to_do"
          }
        },
        "title": [todo],
        "field_task": [todo],
        "field_finished_": ["0"]
      })
    }
  ).then(res => res.json()
  ).then(data => {
    func(data.field_task[0].value, data.path, data.uuid[0].value);
    console.log(data)
  }).catch(err => console.error('ERROR:', err));
}

export default postData;
