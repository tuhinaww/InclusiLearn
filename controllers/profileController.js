exports.getProfile = (req, res) => {
    const name = req.query.name;
    res.render('profile', { check: 'profile', name: name});
};
