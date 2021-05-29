import Draw from './Model';

export default function drawDeleteById(req, res) {
  const drawId = req.params.drawId;
  Draw.deleteOne({ _id: drawId })

    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('Draw delete error');
    });
}