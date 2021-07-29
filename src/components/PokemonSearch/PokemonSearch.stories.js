import React from 'react';

import PokemonSearch from './PokemonSearch';

export default {
   title: 'RotomDB/Molecules/PokemonSearch',
   component: PokemonSearch
 };
 
 const template = (args) => <PokemonSearch {...args} />;
 
 export const Primary = template.bind({});

 Primary.args = {
     setResult: ()=>alert('setResult called')
 };