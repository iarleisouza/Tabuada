function GerarTabuada() {
  
   var numero = document.getElementById('txtn')
   var tab = document.querySelector('select#seltab')
   //  var res = document.querySelector('div#res')
   if (numero.value.length == 0 ) {
     //res.innerHTML = 'Digite um valor!'
    window.alert('[ERRO] Digite um valor!')
   }else {
            //   res.innerHTML = 'Tabuada: <br>'
        var n = Number(numero.value) 
      
        //      for ( c = 1; c <=10; c = c +1){
      // for ( c = 1; c <=10; c++){
      //  for ( c = 1; c <=10; c++){
        //  n = n * c
         //   res.innerHTML += ` ${n} x ${c} = ${n * c} <br>`
         //   console.log(c)
     //  }
      let c = 1
      tab.innerHTML = ''
       while ( c <= 10) {
         let item = document.createElement('option')
         item.text = ` ${n} X ${c} = ${n * c}`
         item.value = `tab${c}`
         tab.appendChild(item) // appendChild => adiciona o elemento filho
         c++
       }
    }
}


