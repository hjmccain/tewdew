import base64 from 'base-64';

const patchData = (node, bool, func) => {
  const credentials = base64.encode('hmccain:droopyjuice');

  fetch(
    `/node/${node}`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/hal+json',
        'Authorization': `basic ${credentials}`
      },
      body: JSON.stringify({
        "_links": {
          "type": {
            "href": "http://tewdew:8888/rest/type/node/to_do"
          }
        },
        "field_finished_": [bool === 'Finished' ? "0" : "1"]
      })
    }
  ).then(res => res.json()
  ).then(data => {
    func(data.uuid[0].value);
    console.log(data)
  }).catch(err => console.error('ERROR:', err));
}

export default patchData;
