import Express, { Request, Response} from "express";

const app = Express()
const porta = 3000

app.get('/menu', (req: Request, res: Response)=>{
    res.sendFile('/workspaces/MoedaSocial/src/views-interfaces/main/main.ts')
})

app.listen(porta, ()=>{
    console.log(`servidor rodando no endereço: http://localhost:${porta}`)
})

