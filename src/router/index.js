import { Router } from "express"
const router= Router()

router.get('/about', (req, res) => res.render('about',{title:'Sobre Mí'}))
router.get('/habilidades', (req, res) => res.render('habilidades',{title: 'Habilidades'}))
router.get('/proyectos',(req,res)=>res.render('proyectos',{title: 'Proyectos'}))
router.get('/formacion',(req,res)=>res.render('formacion',{title: 'Formación'}))

export default router