import test from 'node:test';import assert from 'node:assert/strict';import {Tanks} from '../server/tanks.js';
test('engine preserves the match on restore',()=>{const players=Array.from({length:2},(_,i)=>({id:'p'+i,number:i+1,color:'#64ddff'}));const game=new Tanks(players);assert.deepEqual(new Tanks(players,game.save()).snapshot(),game.snapshot());});
