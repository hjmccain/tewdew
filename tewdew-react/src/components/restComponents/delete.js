import base64 from 'base-64';

const deleteData = (node, uuid, func) => {
  const credentials = base64.encode('hmccain:droopyjuice');
  fetch(
    `/node/${node}`, {
      method: 'DELETE',
      headers: { 'Authorization': `basic ${credentials}` }
    }
  ).catch(err => console.error('ERROR:', err));
  func(uuid);
}

export default deleteData;
