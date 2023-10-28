const UserService = require('../services/UserService');

exports.getUploadForm = (req, res) => {
  const name = UserService.getUsername(req.session.userId);
  res.render('upload', { name: name });
};
