class ContactController {
  //Listar TODOS os registros
  index(request, response) {
    response.send('Send from Contact Controller');
  }

  // Obter UM registro
  show() {

  }

  // Criar novo registro
  store() {

  }

  // Editar um registro
  update() {

  }

  //Deletar um registro
  delete() {

  }
}

module.exports = new ContactController();