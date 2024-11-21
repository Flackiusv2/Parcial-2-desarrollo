export class Formulario {
    constructor(
      public prompt: string,
      public format: string
    ) {}
  }
  
  export class FormularioResponse {
    constructor(
      public title: string,
      public joke: string,
      public rating: string
    ) {}
  }