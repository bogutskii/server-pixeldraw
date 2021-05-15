import Draw from './Model';

export default function drawGetAll(req, res) {
  Draw.deleteMany()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json('draw delete all error');
    });
}
