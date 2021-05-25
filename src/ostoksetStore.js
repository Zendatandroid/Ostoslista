import { writable } from 'svelte/store';

//tämä on tosiaan ainoa tapa, jolla sain storen toimimaan : ^)
const ostokset = writable({ ostoslista: '' });

export default ostokset;
