import base64 from 'base-64';

const patchData = (node, task, bool, func) => {
  const credentials = base64.encode('hmccain:droopyjuice');
  let key, value;
  console.log(bool);
  if (bool) {
    console.log(bool)
    key = "field_finished_";
    value = [(bool === 'Finished') ? "0" : "1"];
  } else {console.log(task)
    key = "field_task";
    value = [task];
  }

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
        [key]: value
      })
    }
  ).then(res => res.json()
  ).then(data => {
    if (func) {
      console.log('running function')
      func(data.uuid[0].value)
    };
    console.log(data)
  }).catch(err => console.error('ERROR:', err));
}

export default patchData;
