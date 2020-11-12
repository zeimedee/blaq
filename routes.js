const express = require('express');
const router = express.Router();
let models = require('./obaa.models')


router.route('/all').get((req,res)=>{
    models.Register.find()
                   .then((data)=>{
                       return res.json(data)
                   })
                   .catch((err)=>{
                       console.log(err)
                   });
})

router.route('/register').post((req,res)=>{
    let user = new models.Register(req.body);
    models.Register.findOne({email:req.body.email})
                   .then((data)=>{
                        if(data){
                            return res.json('user exists')
                        }else{
                            user.save()
                            .then(()=>{
                                if(res.status(200)){
                                    return res.json('saved')
                                }else{
                                    return res.json('not saved')
                                }
                            })
                            .catch((err)=>{
                                console.log(err)
                            })
                        }
                   })
                   .catch();
        
});

router.route('/login').post((req,res)=>{
    models.Register.findOne({email:req.body.email})
                   .then((data)=>{
                       return res.json(data)
                   })
                   .catch((err)=>{
                    console.log(err)
                });
});




module.exports = router;