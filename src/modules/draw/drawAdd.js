import Draw from './Model';

export default function drawAdd(req, res) {
  const { pixelSize, name, field, fieldSize, username } = req.body;

    const newDraw = new Draw({
      name: name,
      fieldSize: fieldSize,
      field: field,
      pixelSize: pixelSize,
      username:username
    });
    newDraw
      .save()
      .then(() => {
        res.status(200).json('Draw created');
      })
      .catch((err) => {
        res.status(400).json('Draw NOT add');
      });

}
