import initSummernote from 'editor';

/* for Bootstrap 3 */
// import 'bootstrap-3/dist/css/bootstrap.css';
// import 'bootstrap-3/dist/js/bootstrap';
// import 'summernote';
// import 'summernote/dist/summernote.css';
/*
for Bootstrap 3 (from source)
    - Webpack needs to set an appropriate loader for the SCSS files
    - Webpack needs to set an appropriate loader for the bootstrap LESS files
    - Summernote depends on Modal, Dropdown, and Tooltip bootstrap libraries
*/
import 'bootstrap-3/less/bootstrap.less';
import 'bootstrap-3/js/modal';
import 'bootstrap-3/js/dropdown';
import 'bootstrap-3/js/tooltip';
import 'bootstrap-3/js/popover';
import 'summernote/src/js/bs3/settings';
// ^--- includes 'summernote/src/styles/summernote-bs3.scss'

(function(){

    $(initSummernote);

})();