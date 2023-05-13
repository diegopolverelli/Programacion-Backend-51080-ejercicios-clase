import winston from 'winston'

let entorno='dev'

export const logger2=winston.createLogger(
    {
        levels:{critico:0,intermedio:1,errortonto:2},
        transports:[
            new winston.transports.Console({
                level:'errortonto',
                format: winston.format.combine(
                    winston.format.colorize({
                        colors:{critico:'red',intermedio:'yellow',errortonto:'green'}
                    }),
                    winston.format.simple()
                )

            })
        ]
    }
)

export const logger=winston.createLogger(
    {
        transports:[
            new winston.transports.Console({
                level:entorno=='dev'?'silly':'warn',
                format: winston.format.combine(
                    winston.format.colorize({
                        colors:{error:'red',warn:'yellow',info:'blue',silly:'green',verbose:'blue'}
                    }),
                    winston.format.simple()
                )
            }),
            // new winston.transports.Console({
            //     level:'error',
            //     format: winston.format.prettyPrint()
            // }),
            // new winston.transports.File({
            //     filename:'./logErrores.log',
            //     level:'error',
            //     format: winston.format.prettyPrint()
            // }),
            // new winston.transports.File({
            //     filename:'./logTodos.log',
            //     level:'silly',
            //     format: winston.format.prettyPrint()
            // })



        ]
    }
)

export const middLogger=(req, res, next)=>{

    req.logger=logger
    next();

}

