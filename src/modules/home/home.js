export default function home(req, res) {
  res.status(200).json({ name: 'Alex', id: 123, status: true });
  //JSON.stringify(obj)
  //JSON.parse(json)
}
