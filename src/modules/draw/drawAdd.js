import Draw from './Model';

export default function drawAdd(req, res) {
  const { id, pixelSize, name, field, fieldSize, username } = req.body;
  console.log('Received draw data:', req.body);

  const newDraw = new Draw({
    id: id,
    name: name,
    fieldSize: fieldSize,
    field: field,
    pixelSize: pixelSize,
    username: username
  });
  newDraw
    .save()
    .then((savedDraw) => {
      res.status(200).json(savedDraw);
    })
    .catch((err) => {
      console.error('Error saving draw:', err);
      res.status(400).json('Draw NOT add');
    });
}
