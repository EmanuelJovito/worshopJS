
const getStatusLabel = status => (
  status ? "Ativado" : "Desativado"
);

const renderLine = ({name, email, telefone = 'Não cadastrado', status}, userIndex) => 
(  
  `<tr>
    <th scope="row">${(userIndex + 1)}</th>
    <td> ${name} </td>
    <td> ${email} </td>
    <td> ${telefone} </td>
    <td> ${getStatusLabel(status)} </td>
    <td><button type="button" data-userId="${(userIndex + 1)}" class="btn btn-edit btn-link text-primary">Editar</button></td>
    <td><button type="button" class="btn btn-link text-danger">Excluir</button></td>
  </tr>`
)

const renderLines = userData =>(
  userData.map(renderLine).join("") )

export default userData => (
    `<table class="table table-striped mt-4">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nome</th>
          <th scope="col">E-mail</th>
          <th scope="col">Telefone</th>
          <th scope="col">Status</th>
          <th scope="col">&nbsp;</th>
          <th scope="col">&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        ${renderLines(userData)} 
      </tbody>
    </table>`
  )
;
