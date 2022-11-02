var modelo = require('.././Models');

module.exports = {

  Inicio : function(req, res, next){

    modelo.puertas.findAll({}).then(function(rows){
      return res.render("inicio", {
                test : rows[0].Identificacion,
              })
    })
    
  }
}