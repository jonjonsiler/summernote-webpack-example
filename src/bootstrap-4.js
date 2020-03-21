import initSummernote from 'editor';

/* for Bootstrap 4 */
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap';
// import 'summernote/dist/summernote-bs4';
// import 'summernote/dist/summernote-bs4.css';
/*
for Bootstrap 4 (from source)
    - Webpack needs to set an appropriate loader for the SCSS files
    - Summernote depends on Modal, Dropdown, and Tooltip bootstrap libraries
*/
import 'bootstrap/scss/bootstrap.scss';
import Modal from 'bootstrap/js/dist/modal';
import Dropdown from 'bootstrap/js/dist/dropdown';
import Tooltip from 'bootstrap/js/dist/tooltip';
import Popover from 'bootstrap/js/dist/popover';
import 'summernote/src/js/bs4/settings'; 
// ^--- includes 'summernote/src/styles/summernote-bs4.scss'

(function(){

    $(initSummernote);

})();