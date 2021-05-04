import Draw from './Model';

export default function drawAdd(req, res) {
  const { pixelSize, name, field, fieldSize } = req.body;
  if (errors.isEmpty()) {
    const newDraw = new Draw({
      name: name,
      fieldSize: fieldSize,
      field: field,
      pixelSize: pixelSize,
    });
    newDraw
      .save()
      .then(() => {
        res.status(200).json('Draw created');
      })
      .catch((err) => {
        res.status(400).json('Draw NOT add');
      });
  } else {
    return res.status(400).json({ message: 'Draw add  error', errors });
  }
}
