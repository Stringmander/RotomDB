import React from 'react';

import App from '../App.js';

export default {
   title: 'RotomDB/Organisms/Pokedex',
   component: App,
   argTypes: {
   },
 };
 
 const Pokedex = (args) => <App {...args} />;
 
 export const Primary = Pokedex.bind({});
 Primary.args = {
 };