// const celular = {
//   cor: 'preto',
//     ligar: function() {
//       const mensagem = "Ligando"
//       alert(mensagem)
//     }
// }

// celular.ligar()

// pesquisa pelo seletor input
const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)

const data = {
  run: ["01-01", "01-02", "01-06", "01-07", "01-08", "01-09"],
  water: ["01-02", "01-03", "01-07", "01-08"],
  food: ["01-01", "01-04", "01-03", "01-08", "01-09"],
}

nlwSetup.setData(data)
nlwSetup.load()
