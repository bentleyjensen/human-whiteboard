var PageView = require('./base');
var templates = require('../templates');

module.exports = PageView.extend({
    title: 'draw',
    template: templates.pages.draw,
    render: function () {
        this.renderAndBind();
    }
});

