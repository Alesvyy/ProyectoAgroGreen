console.log('hola')

const { renderFile } = require('ejs');
const express = require('express');

const app= express();
const bodyParser = require('body-parser');

const path = require('path'); 
app.set('views',path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: false}));




app.listen(3000, ()=>{
    console.log("Se conecto al puerto");
});

app.use(express.static(path.join(__dirname,'public')));


//Rutas

app.get('/prueba', (req,res)=>{
  res.render('prueba.html');
});

app.get('/login', (req,res)=>{
  res.render('login.html');
});

app.get('/tarjeta', (req,res)=>{
  res.render('tarjeta.html');
});

app.get('/carrito', (req,res)=>{
  res.render('carrito.html');
});

app.get('/envio', (req,res)=>{
  res.render('envio.html');
});

app.get('/recuperar-contra', (req,res)=>{
  res.render('recuperar-contra.html');
});

app.get('/registro', (req,res)=>{
  res.render('registrarse.html');
});

app.get('/registro2', (req,res)=>{
  res.render('registrarse2.html');
});

app.get('/menu', (req,res)=>{
  res.render('menu.html');
});

app.get('/navegacion', (req,res)=>{
  res.render('navegacion.html');
});

app.get('/tramos', (req,res)=>{
  res.render('tramos.html');
});

app.get('/solicitud-vendedor', (req,res)=>{
  res.render('solicitud-vendedor.html');
});



//Productos
app.get('/productos', (req,res)=>{
  res.render('productos.html');
});

app.get('/verduras', (req,res)=>{
  res.render('verduras.html');
});

app.get('/frutas', (req,res)=>{
  res.render('frutas.html');
});

app.get('/lacteos', (req,res)=>{
  res.render('lacteos.html');
});

app.get('/alimento', (req,res)=>{
  res.render('alimento.html');
});

//Sobre el proyecto

app.get('/acerca', (req,res)=>{
  res.render('acercaDe.html');
});

app.get('/nosotros', (req,res)=>{
  res.render('creadores.html');
});



app.get('/procesando', (req,res)=>{
  res.render('procesando.html');
});





//Pruebas (se encunetran en el menu)

app.get('/reg-vendedor', (req,res)=>{
  res.render('registrarse-vendedor.html');
});


app.get('/reviews', (req,res)=>{
  res.render('reviews.html');
});

app.get('/perfil-usuario', (req,res)=>{
  res.render('perfilUser.html');
});

app.get('/perfil-vendedor', (req,res)=>{
  res.render('perfilVendedor.html');
});

app.get('/cambiar-contra', (req,res)=>{
  res.render('cambiar-contra.html');
});

app.get('/registro-productos',(req,res)=>{
  res.render('registro-productos.html');
});

app.get('/formulario',(req,res)=>{
  res.render('formulario.html');
});

app.get('/registro-producto-admin',(req,res)=>{
  res.render('registro-producto-admin.html');
});

/*app.get('/registro-productos-vendedor',(req,res)=>{
  res.render('registro-productos-vendedor.html');
});*/
app.get('/registro-producto-admin-tabla',(req,res)=>{
  res.render('registro-producto-admin-tabla.html');
});





app.get('/registroferia',(req,res)=>{
  res.render('registroferia.html');
});
app.get('/registrotramo',(req,res)=>{
  res.render('registrotramo.html');
});
/*app.get('/registrotramo-tabla',(req,res)=>{
  res.render('registrotramo-tabla.html');
});*/
/*app.get('/registro-feria-admin',(req,res)=>{
  res.render('registro-feria-admin.html');
});*/



app.get('/perfilUser',(req,res)=>{
  res.render('perfilUser.html');
});

app.get('/reportes-admin-tabla',(req,res)=>{
  res.render('reportes-admin-tabla.html');
});


app.get('/lista-total-productos-admin',(req,res)=>{
  res.render('lista-total-productos-admin.html');
});

app.get('/lista-total-tramos-admin',(req,res)=>{
  res.render('lista-total-tramos-admin.html');
});


app.get('/inventario-vendedor',(req,res)=>{
  res.render('inventario-vendedor.html');
});

app.get('/ventas-ganancias',(req,res)=>{
  res.render('ventas-ganancias.html');
});




app.get('/solicitud-admin-tabla',(req,res)=>{

  const registrousuario = require('../models/registrousuarios.js');
  const registrousuarioList = async() =>{
      const registrousuarios=await registrousuario.find();
      res.render('solicitud-admin-tabla',{registrousuarios:registrousuarios});
  }
  registrousuarioList();
});

const registrousuario = require('../models/registrousuarios.js')


app.post('/formularioregistro',(req,res)=>{
  let data = new registrousuario({
    usuario: req.body.usuario,
    primerapellido: req.body.primerapellido,
    segundoapellido: req.body.segundoapellido,
    IDidentificacion: req.body.IDidentificacion,
    identificacion: req.body.identificacion,
    telefono: req.body.telefono,
    correo: req.body.correo,
    password: req.body.password,
    //image:req.body.image,
    IDusuario: req.body.IDusuario
  })
  console.log(data)
  data.save()
    .then(()=>{
      console.log("Registro saved")
    })
    .catch((err)=>{
      console.log("ERROR")
    })
  res.redirect('/login')
});

app.post('/authenticate',(req,res)=>{
    let data = {
        identificacion:req.body.identificacion,
        password:req.body.password,
        IDusuario:req.body.IDusuario
    }

    const existingRegistrousuario = async() =>{
        const solicitud = await registrousuario.findOne({identificacion:data.identificacion})

        if(solicitud!=null){
            if(solicitud.password == data.password && solicitud.IDusuario =="vendedor" ){
                res.redirect('/registro-productos-vendedor');
            }else if(solicitud.password == data.password && solicitud.IDusuario =="administrador" ) {
                res.redirect('/registro-producto-admin-tabla');
            }else if(solicitud.password == data.password && solicitud.IDusuario =="cliente" ) {
                res.redirect('/carrito');

            } else {res.redirect('/login');
              
            
            }

        }else{
            res.redirect('/login');
        }

    }
    existingRegistrousuario();
});


app.get('/registrotramo-tabla',(req,res)=>{

  const registrotramo = require('../models/registrotramos.js');
  const registrotramoList = async() =>{
      const registrotramos=await registrotramo.find();
      res.render('registrotramo-tabla',{registrotramos:registrotramos});
  }
  registrotramoList();
});

const registrotramo = require('../models/registrotramos.js')

app.post('/registrotramo',(req,res)=>{
  let data = new registrotramo({
    nombrevendedor: req.body.nombrevendedor,
    tramoasignado: req.body.tramoasignado,
    impuestoapp: req.body.impuestoapp,
    //image:req.body.image,
  })
  console.log(data)
  data.save()
    .then(()=>{
      console.log("Registro saved")
    })
    .catch((err)=>{
      console.log("ERROR")
    })
  res.redirect('/registrotramo-tabla')
});

app.get('/registro-productos-vendedor',(req,res)=>{

  const registroproducto = require('../models/registroproductos.js');
  const registroproductoList = async() =>{
      const registroproductos=await registroproducto.find();
      res.render('registro-productos-vendedor',{registroproductos:registroproductos});
  }
  registroproductoList();
});

const registroproducto = require('../models/registroproductos.js')

app.post('/registroproductovendedor',(req,res)=>{
  let data = new registroproducto({
    NombreProducto: req.body.NombreProducto,
    categoria: req.body.categoria,
    unidadesDispo: req.body.unidadesDispo,
    precio: req.body.precio,
    //image:req.body.image,
  })
  console.log(data)
  data.save()
    .then(()=>{
      console.log("Registro saved")
    })
    .catch((err)=>{
      console.log("ERROR")
    })
  res.redirect('/registro-productos-vendedor')
});

app.get('/registro-feria-admin',(req,res)=>{

  const registroferia = require('../models/registroferias.js');
  const registroferiaList = async() =>{
      const registroferias=await registroferia.find();
      res.render('registro-feria-admin',{registroferias:registroferias});
  }
  registroferiaList();
});

const registroferia = require('../models/registroferias.js')

app.post('/registroferia',(req,res)=>{
  let data = new registroferia({
    nombreferia: req.body.nombreferia,
    diaferia: req.body.diaferia,
    provincia: req.body.provincia,
    canton: req.body.canton,
    distrito:  req.body.distrito,
    //image:req.body.image,
  })
  console.log(data)
  data.save()
    .then(()=>{
      console.log("Registro saved")
    })
    .catch((err)=>{
      console.log("ERROR")
    })
  res.redirect('/registro-feria-admin')
});



