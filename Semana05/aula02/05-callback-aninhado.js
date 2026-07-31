function loadOrders(callback){
  setTimeout(()=>{
    console.log("2 - Pedidos carregados");
    callback(); 
  }, 2000);
}

function loginUser(user, callback){
  setTimeout(()=>{
    console.log("1 - Usuário logado:", user);
    callback();
  }, 2000);
}

function loadDetais(callback){
  setTimeout(()=>{
    console.log("3 - Detalhes carregados");
    callback();
  }, 2000);
}

loginUser("Larry James", () => {
  loadOrders(() => {
    loadDetais(() => {
      console.log("Tudo finalizado.");
    });
  });
});
