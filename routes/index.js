var router = require('express').Router();

const homeController = require('../controllers/homePage');
const aboutController = require('../controllers/aboutPage');
const galleryController = require('../controllers/projectsPage');
const blogsController = require('../controllers/blogsPage');
const singlePostController = require('../controllers/singlePost');
const createPostController = require('../controllers/newPost');
const storePostController = require('../controllers/storePost');
const deletePostController = require('../controllers/deletePost');
const registerController = require('../controllers/registerStaffMember');
const storeUserController = require('../controllers/StoreStaffMember');
const loginController = require('../controllers/loginPage');
const loginUserController = require('../controllers/staffLoginDB');
const logoutController = require('../controllers/logoutStaff');
const projectsPageController = require('../controllers/projectsPage');
// Arizona
const newArizonaProjectController = require('../controllers/newArizonaProject');
const storeArizonaProjectController = require('../controllers/StoreArizonaProject');
const allArizonaProjectsController = require('../controllers/ArizonaProjectsHomePage');
const singleArizonaProjectController = require('../controllers/singleArizonaProject');
const deleteArizonaProjectController = require('../controllers/deleteArizonaProject');
// Nevada
const newNevadaProjectController = require('../controllers/newNevadaProject');
const storeNevadaProjectController = require('../controllers/StoreNevadaProject');
const allNevadaProjectsController = require('../controllers/NevadaProjectsHomePage');
const singleNevadaProjectController = require('../controllers/singleNevadaProject');
const deleteNevadaProjectController = require('../controllers/deleteNevadaProject');
// California
const newCaliforniaProjectController = require('../controllers/newCaliforniaProject');
const storeCaliforniaProjectController = require('../controllers/StoreCaliforniaProject');
const allCaliforniaProjectsController = require('../controllers/CaliforniaProjectsHomePage');
const singleCaliforniaProjectController = require('../controllers/singleCaliforniaProject');
const deleteCaliforniaProjectController = require('../controllers/deleteCaliforniaProject');
// Hawaii
const newHawaiiProjectController = require('../controllers/newHawaiiProject');
const storeHawaiiProjectController = require('../controllers/StoreHawaiiProject');
const allHawaiiProjectsController = require('../controllers/HawaiiProjectsHomePage');
const singleHawaiiProjectController = require('../controllers/singleHawaiiProject');
const deleteHawaiiProjectController = require('../controllers/deleteHawaiiProject');

const authMiddleWare = require('../middlewares/authorizedStaff');
const redirectMiddleWare = require('../middlewares/redirectIfStaff');
const validateForm = require('../middlewares/formValidate');

router.get('/', homeController);
router.get('/about', aboutController);
router.get('/gallery', galleryController);
router.get('/projects', projectsPageController); // no ejs page yet
// Arizona DB
router.get('/newAzProject', newArizonaProjectController);
router.post('/store/az', storeArizonaProjectController);
router.get('/arizonaProjects', allArizonaProjectsController);
router.get('/singleArizona/:id', singleArizonaProjectController);
router.get('/deleteArizona/:id', deleteArizonaProjectController);
// Nevada DB
router.get('/newNaProject', newNevadaProjectController);
router.post('/store/na', storeNevadaProjectController);
router.get('/nevadaProjects', allNevadaProjectsController);
router.get('/singleNevada/:id', singleNevadaProjectController);
router.get('/deleteNevada/:id', deleteNevadaProjectController);
// Hawaii DB
router.get('/newHaProject', newHawaiiProjectController);
router.post('/store/ha', storeHawaiiProjectController);
router.get('/hawaiiProjects', allHawaiiProjectsController);
router.get('/singleHawaii/:id', singleHawaiiProjectController);
router.get('/deleteHawaii/:id', deleteHawaiiProjectController);
// California DB
router.get('/newCaProject', newCaliforniaProjectController);
router.post('/store/ca', storeCaliforniaProjectController);
router.get('/californiaProjects', allCaliforniaProjectsController);
router.get('/singleCalifornia/:id', singleCaliforniaProjectController);
router.get('/deleteCalifornia/:id', deleteCaliforniaProjectController);
// Blogs DB
router.get('/blogs', blogsController);
router.get('/post/:id', singlePostController);
router.get('/create', authMiddleWare, createPostController);
router.post('/store/post', authMiddleWare, validateForm, storePostController);
router.get('/delete/:id', deletePostController);
// Staff DB
router.get('/register', redirectMiddleWare, registerController);
router.post('/store/user', storeUserController);
router.get('/login', redirectMiddleWare, loginController);
router.post('/login/user', loginUserController);
router.get('/logout', logoutController);

module.exports = router;