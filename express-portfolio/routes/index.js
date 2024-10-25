const express = require('express');
const router = express.Router();

/* GET 首页 */
router.get('/', function (req, res, next) {
  res.render('index', { title: '首页' });
});

/* GET 关于页面 */
router.get('/about', function (req, res, next) {
  res.render('about', { title: '关于我' });
});

/* GET 项目页面 */
router.get('/projects', function (req, res, next) {
  res.render('projects', { title: '项目' });
});

/* GET 服务页面 */
router.get('/services', function (req, res, next) {
  res.render('services', { title: '服务' });
});

/* GET 联系我们页面 */
router.get('/contact', function (req, res, next) {
  res.render('contact', { title: '联系我们' });
});

module.exports = router;
