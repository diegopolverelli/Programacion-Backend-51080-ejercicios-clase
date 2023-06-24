

export const politicas=(roles=[])=>{
    return (req, res, next)=>{
        if(roles.includes('PUBLIC')) return next();
        if(!req.user) return res.status(401).send('No autenticado')
        if(!roles.includes(req.user.role.toUpperCase())) return res.status(403).send('No tiene privilegios suficientes')
        
        next()
    }
}