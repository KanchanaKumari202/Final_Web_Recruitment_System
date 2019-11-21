const express = require('express');
const router = express.Router();
const employee_contrller = require('../controllers/employee.controller');
// const employeeRoutes = require('./controllers/employeev2.controller');
router.get('/', employee_contrller.employees_details)
router.get('/:id', employee_contrller.employee_details)
    // router.post('/create', employee_contrller.employee_create);
router.put('/:id/update', employee_contrller.employee_update);
// router.put('/:id/updatePerson', employee_contrller.employee_updatePerson);
router.delete('/:id/delete', employee_contrller.employee_delete);
router.post('/:email/send-email', employee_contrller.employee_send);
router.post('/:name/search-applicant', employee_contrller.employee_search);

module.exports = router;