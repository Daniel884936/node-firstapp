/* const express = require('express')
require('./database')

const app = express()

app.use(require('./routes/hero'))


app.get('/', async (req, res)=>{
    res.send('Hello world')
    console.log('Hello world')
})

app.listen(3000);
 */



const heroService = require('./services/heroService')
const { StatusCodes} = require('http-status-codes')
const express = require('express')
require('./database')
const app = express()
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.listen(3000)

app.post('/hero',async (request, response)=>{
    console.log('works')
    try{
        const {name, surnames, password, email} =  request.body;
        let hero = {name, surnames, password, email};
        console.log(hero)
        hero = await heroService.addHero(hero)    
        console.log(hero)
        response.status(StatusCodes.OK).json(hero)
    }catch(error){
        response.status(StatusCodes.INTERNAL_SERVER_ERROR)
    }
    
})

app.put('/hero',async (request, response)=>{
    try{
         const {name, surnames, password, email} =  request.body;
        let hero = {name, surnames, password, email};
        hero =  await heroService.updateHero(hero)
        response.status(StatusCodes.OK).json(hero)
    }catch(error){
        response.status(StatusCodes.INTERNAL_SERVER_ERROR)
    }
   
})


app.delete('/hero/:id',async (request, response)=>{
    try{
        const {id} =  request.body;    
        let hero = await heroService.deleteHero(id)
        response.status(StatusCodes.OK).json(hero)
    }catch(error){
        response.status(StatusCodes.INTERNAL_SERVER_ERROR)
    }
    
})


app.get('/hero',async (request, response)=>{
    try{
        const {id} =  request.body;    
        const hero = await heroService.getById(id)
        response.status(StatusCodes.OK).json(hero)
    }catch(error){
        response.status(StatusCodes.INTERNAL_SERVER_ERROR)
    }
    
})

app.get('/hero',async (request, response)=>{
    try{
        const heroes = await heroService.getAllHeroes()
        response.status(StatusCodes.OK).json(heroes)
    }catch(error){
        response.status(StatusCodes.INTERNAL_SERVER_ERROR)
    }
})
    