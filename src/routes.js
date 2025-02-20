import express from 'express';
import { categoriesFromDatabase } from './lib/db.js';
import xss from 'xss';

export const router = express.Router();

router.get('/', async (req, res) => {
  const categories = await categoriesFromDatabase();

  console.log(categories);
  res.render('index', { title: 'Forsíða' , categories});
}); 

router.get('/spurningar/:category', (req, res) => {
  const title = req.params.category
  res.render('category', { title });
});

router.get('/form',(req,res) => {
  res.render('form', { title: 'Búa til flokk'});
});
 
router.post('/form',async (req,res) =>{
  const {name} = req.body;
  console.log(name);

  let isSafe = true;

  // ChatGPT gerði þetta fyrir mig
  for (let item of items) {
    if (xss(item) !== item || item.length > 100 || item.length < 5) {
      isAllSafe = false; 
      break; 
    }
  }

  console.log(isSafe);

  if(isSafe){
    const db = new Database(env.connectionString, logger);
      db.open();

    db.query(`INSERT INTO categories (name) VALUES (${name[0]})`)
  } 
  res.render('form', {title : 'Búa til flokk'});
});