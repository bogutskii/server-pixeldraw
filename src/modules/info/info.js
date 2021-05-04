const names = ['Kenes'];

export default function info(req, res) {
  names.push(req.body.name, req.body.email);
  res.status(200).json(names);

  // res.send('info Here ' + names);
  //JSON.stringify(obj)
  //JSON.parse(json)
}
