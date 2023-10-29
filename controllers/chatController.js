exports.getLoginForm = (req, res) => {
    res.render('chat', { check: 'chat', name: "new"});
};
