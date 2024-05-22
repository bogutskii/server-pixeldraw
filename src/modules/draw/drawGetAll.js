import Draw from './Model';

export default function drawGetAll(req, res) {
  Draw.find()
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.error(err);
      res.status(400).json('draw get all error');
    });
}
