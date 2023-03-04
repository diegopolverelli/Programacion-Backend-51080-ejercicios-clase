
import {heroesModelo} from './models/heroes.models.js'


export class Heroe{
    constructor(){

    }

    async obtenerHeroes(req,res){

        let heroes;
        try {
            heroes=await heroesModelo.find()
        } catch (error) {
            res.setHeader('Content-Type','application/json');
            return res.status(500).json({
                mensaje:`Error al obtener heroes de la DB`
            })
        }
    
        res.setHeader('Content-Type','application/json');
        res.status(200).json({
            heroes
        })
    
    }

    async grabaHeroes(req,res){

        // faltan las validaciones:
        // - que lleguen todos los datos necesarios, obligatorios (hay que mirar en el Schema,
        // lo que definimos como required)
        // - que no se generen duplicados en la coleccion (en el Schema estar atentos a los unique)
        // ... etc....
    
        let heroesACrear=req.body;
        console.log(heroesACrear);
        let heroesCreados=await heroesModelo.create(heroesACrear);
    
        res.setHeader('Content-Type','application/json');
        res.status(201).json({
            heroesCreados
        })
    
    }

    async modificaHeroe(req, res){

        let id=req.params.id;
    
        // debería realizar validaciones... las de unique, las de required, etc.
        let heroeAModificar=req.body;
        let heroeModificado=await heroesModelo.updateOne({_id:id},heroeAModificar)
    
        res.setHeader('Content-Type','application/json');
        res.status(200).json({
            heroeModificado
        })
    }

    async borraHeroe(req, res){

        let id=req.params.id;
    
        let heroeModificado=await heroesModelo.deleteOne({_id:id});
    
        res.setHeader('Content-Type','application/json');
        res.status(200).json({
            heroeModificado
        })
    }


} // cierra class Heroe

