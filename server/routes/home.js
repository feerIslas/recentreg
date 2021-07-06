// Impoprtando Router
import { Router } from 'express';

// Importando al controlador Home
import homeController from '@server/controllers/homeController';

// Creando la instancia de un router
const router = new Router();

// GET '/'
router.get(['/', '/index'], homeController.index);

// GET '/greeting'
router.get('/greeting', homeController.greeting);

// GET '/about'
router.get('/about', homeController.about);

// GET '/contacto'
router.get('/contacto', homeController.contacto);

// Exportando el oruter que maneja las subrutas
// para el controlador Home
export default router;
