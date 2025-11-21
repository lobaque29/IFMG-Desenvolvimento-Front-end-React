
class Departamento {
  #nome;
  constructor(nome) { this.#nome = nome; }
  get nome () { return this.#nome; }
}
class Empresa {
  #nome; #departamentos;
  constructor(nome) {
    this.#nome = nome;
    this.#departamentos = [];
  }
  get nome () { return this.#nome; }
  adicionarDepartamento(departamento) {
    this.#departamentos.push(departamento);
  }
  listarDepartamentos() {
    console.log('Departamentos da ' + this.nome + ':');
    this.#departamentos.forEach(dep => console.log('- ' + dep.nome));
  }
}

const deptTI = new Departamento('TI');
const deptRH = new Departamento('RH');
const deptFinancas = new Departamento('Finanças');

const empresaIFMG = new Empresa('IFMG');
empresaIFMG.adicionarDepartamento(deptTI);
empresaIFMG.adicionarDepartamento(deptRH);
empresaIFMG.adicionarDepartamento(deptFinancas);

empresaIFMG.listarDepartamentos();
