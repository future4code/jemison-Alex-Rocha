//01.
const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" }
  ]
  
  const novoArrayA = usuarios.map((item, index, array) => {
     console.log(item, index,array)
  })
  /* Vai criar uma array identica a primeira para cada item da 
  array anterior
 */
//02.
const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayB = usuarios.map((item, index, array) => {
     return item.nome
  })
  
  console.log(novoArrayB)
//   Vai imprimir "novoArrayB" contendo os itens "nome:"

//03.
const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayC = usuarios.filter((item, index, array) => {
     return item.apelido !== "Chijo"
  })
  
  console.log(novoArrayC)
  //   Vai imprimir "novoArrayC" contendo os itens em que 
//   o "apelido" seja diferente de "chijo"

//01.
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
  ]
  const nomePets = pets.map((item,index,array)=> {
     return item.nome   
  })
  console.log(nomePets)
  
  const salsichaPets = pets.filter((item,index,array) =>{
  return item.raca === "Salsicha"
  })
  
  console.log(salsichaPets)
  
  const poodlesPets = pets.filter((item,index,array) =>{
     return item.raca === "Poodle"
  })
  
  const nomePoodles = poodlesPets.map((item,index,array) =>{
  return item.nome
  })
    console.log(`Você ganhou um cupom de desconto de 10% para 
    tosar o/a ${nomePoodles}`) 

    //02.
    const produtos = [
        { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
        { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
        { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
        { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
        { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
        { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
        { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
        { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
        { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
        { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
      ]
      
        
        const nomeProdutos = produtos.map((item) => {
             return item.nome
      
         })
         console.log(nomeProdutos)
        const produtoDesconto = produtos.map((item) =>{
         return{nome:item.nome, preco: item.preco *(0,95)} 
        
       })
       const produtoBebida = produtos.filter((item) => {
       return item.categoria === "Bebidas"
       })
        const nomeBebida = produtoBebida.map((item)=>{
         return item.nome
       })
       console.log (produtoBebida)
      
      const produtoYpe = produtos.filter ((item) =>{
        return item.nome.includes("Ypê")
      })
      console.log(produtoYpe)
      
      const novoarray = produtos.map ((item)=>{
      return {nome:item.nome.includes("Ypê"), preco:item.preco}
      })
      console.log (`Compre ${novoarray.nome} por ${novoarray.preco}`)