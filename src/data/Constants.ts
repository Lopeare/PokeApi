const APIBASEURL:string = 'https://pokeapi.co/api/v2/';
const POKEMON:string = 'pokemon';
const XHG:number = 1;
const XLBS:number = 0.22;
const XKG:number = 0.1;
const KG:string = 'Kg';
const HG:string = 'Hg';
const LBS:string = 'Lbs';

const WEIGHTS:object[] = [
  {
    type: HG,
    mod: XHG,
  },
  {
    type: KG,
    mod: XKG,
  },
  {
    type: LBS,
    mod: XLBS,
  },

];

export {
  APIBASEURL, POKEMON, HG, XHG, WEIGHTS,
};
