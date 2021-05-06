const fs = require('fs');
const path = require('path');

/*
  Serve webp if browser supports it
*/
export default (req, res) => {
  try {
    const { name } = req.query;
    const acceptsWebP = req.headers.accept.includes('image/webp');
    const stream = fs.createReadStream(
      path.resolve(`${__dirname}/../../public/${name}.${acceptsWebP ? 'webp' : 'jpg'}`)
    );
    stream.on('open', () => {
      res.setHeader('Content-Type', acceptsWebP ? 'image/webp' : 'image/jpeg');
      stream.pipe(res);
    });
    stream.on('error', () => {
      res.setHeader('Content-Type', 'text/plain');
      res.status(404).end('Not found');
    });
  } catch (err) {
    // TODO: reportError(err, 'Error getting webp/jpg image');
    console.log('err', err);
    res.status(500).send('An error occured getting this image');
  }
};
