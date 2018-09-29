var gulp = require('gulp');//引入gulp
var sass = require('gulp-sass');//引入sass插件
var jshint = require('gulp-jshint'); //检查语法错误
var concat = require('gulp-concat'); //合并
var uglify = require('gulp-uglify'); //压缩
var rename = require('gulp-rename'); //重命名
var minifyHtml = require("gulp-minify-html");//html压缩
var imagemin = require('gulp-imagemin');//图片压缩
var pngquant = require('imagemin-pngquant');//png图片压缩
var cssmin = require('gulp-minify-css');

// sass编译
// 将你的默认的任务代码放在这,如果任务的名字是default，直接gulp运行。
gulp.task('runsass', function() {
  //sass文件的路径,编译多个scss为扩展名的文件。
  gulp.src('sass/*.scss')
  //执行sass编译
  .pipe(sass())
  //编译后文件输出
  .pipe(gulp.dest('css/'));
});

//监听
gulp.task('sasswatch', function() {
    // 监听文件变化
    gulp.watch('sass/*.scss', function() {//监听的文件路基
        gulp.run('runsass');
    });
});

//js压缩，合并，检测错误，输出错误报告
//错误检查
gulp.task('jshint',function(){
    gulp.src('js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('gulp-jshint-html-reporter', { filename: 'error.html' })); // 输出错误的结果到自定义的html文件
});

//合并压缩
gulp.task('scripts',function(){
    gulp.src('js/*.js')
    .pipe(concat('all.js')) //合并(合并后的文件名)
    .pipe(gulp.dest('dist/')) //定义输出合并后的文件夹
    .pipe(rename('all.min.js')) //压缩的文件重新命名
    .pipe(uglify()) //压缩
    .pipe(gulp.dest('dist/')); //定义输出压缩后的文件夹
});

gulp.task('runjs', function() {
    //gulp.run('jshint', 'scripts');//上面定义的任务的名称
    gulp.watch('js/*.js',function(){
        gulp.run('jshint','scripts');
    });    
});


//压缩css代码

gulp.task('testCssmin', function() {
    gulp.src('css.css')
        .pipe(cssmin())
        .pipe(gulp.dest('distcss/'));
});



//压缩html代码
gulp.task('runhtml',function(){
    gulp.src('*.html')
    .pipe(minifyHtml())
    .pipe(gulp.dest('dist/'))
});

//图片压缩
gulp.task('testImagemin', function() {
    gulp.src('img/*.{png,jpg,gif,ico}')
        .pipe(imagemin({
            optimizationLevel: 7, //类型：Number 默认：3 取值范围：0-7（优化等级）
            progressive: true, //类型：Boolean 默认：false 无损压缩 jpg 图片
            use: [pngquant()] //使用 pngquant 深度压缩 png 图片的 imagemin 插件
        }))
        .pipe(gulp.dest('distimg/'));
});