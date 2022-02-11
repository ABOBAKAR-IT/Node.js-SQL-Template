
  
const app=require('express')
const post_route=app.Router();
const {add,update,findall,findone}=require('../2_controlar/controlar')
post_route.post('/add',add)
 post_route.post('/update',update)
 post_route.post('/findall',findall)
 post_route.post('/findone',findone)



module.exports=post_route