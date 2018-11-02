import { Marked } from 'marked-ts';

const URL = 'http://www.randomtaco.me/random/?full-taco=true;'

export function getRandomTaco(): Promise<TacoResponse> {
  return new Promise((resolve, reject) => {
    fetch(URL)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        resolve(new TacoResponse(json));
      })
      .catch((error) => {
        console.warn(error);
      });
  })
}

export class TacoResponse {
  public title: string;
  public recipe: string;
  public mixin: string;
  public baseLayer: string;
  public condiment: string;

  constructor(jsonResponse: any) {
    this.title = jsonResponse.name;
    this.recipe = jsonResponse.mixin ? jsonResponse.mixin.recipe : '_(none)_';
    this.mixin = jsonResponse.mixin ? jsonResponse.mixin.recipe : '_(none)_';
    this.baseLayer = jsonResponse.base_layer ? jsonResponse.base_layer.recipe : '_(none)_';
    this.condiment = jsonResponse.condiment ? jsonResponse.condiment.recipe : '_(none)_';

    this.recipe = Marked.parse(this.recipe);
    this.mixin = Marked.parse(this.mixin);
    this.baseLayer = Marked.parse(this.baseLayer);
    this.condiment = Marked.parse(this.condiment);
  }
}