import Draw from './Model';

export default function drawGetAll(req, res) {
  Draw.find()
    // User.find({ email: 'asd@ggg.os' })
    // .limit(2)
    // .skip(1)
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('draw get all error');
    });
}
