exports.getHomepage = (req, res) => {
  res.render('homepage', { check: 'homepage', name: "new"});
};
