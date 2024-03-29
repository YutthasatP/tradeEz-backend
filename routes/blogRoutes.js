'use strict'

module.exports = function(app){
    var blogList = require('../controllers/blogController')

    app.route('/createpost')
        .post(blogList.createBlog)
    app.route('/detail/:blogId')
        .get(blogList.readBlog)
        .delete(blogList.deleteBlog)
    app.route('/edit/:blogId')
        .put(blogList.updateBlog)
    app.route('/latest')
        .get(blogList.readLatestBlog)
    app.route('/allblog')
        .get(blogList.readAllBlog)
    app.route('/annouceblog')
        .get(blogList.readAnnouceBlog)
    app.route('/blogByUID/:uid')
        .get(blogList.readBlogByUID)
    app.route('/rewardblog')
        .get(blogList.readRewardBlog)
    app.route('/getManyBlog')
        .post(blogList.readManyBlogByID)
}