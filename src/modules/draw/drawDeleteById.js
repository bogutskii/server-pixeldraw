import Draw from './Model';

export default function drawDeleteById(req, res) {
  const drawId = req.params.id;
  Draw.deleteOne({ id: drawId })
    .then((result) => {
      if (result.deletedCount === 0) {
        return res.status(404).json({ error: 'Draw not found' });
      }
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: 'Draw delete error' });
    });
}