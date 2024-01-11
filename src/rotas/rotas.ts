import Express, { Request, Response} from "express";

const app = Express()
const porta = 3000

app.get('/menu', (req: Request, res: Response)=>{
    res.render(__dirname+'/src/views-interfaces/main/main.ts')
})

app.get('/menu/transferencia', (req:Request, res: Response)=>{
    res.sendFile(__dirname+'/src/views-interfaces/main/transfer/transfer.html')
})


app.listen(porta, ()=>{
    console.log(`servidor rodando no endereço: http://localhost:${porta}/menu`)
})

