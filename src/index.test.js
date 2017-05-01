/**
 * Created by salamaashoush on 21/04/17.
 */
import { expect } from 'chai';
import * as fs from "fs";
import * as jsdom from "jsdom";


describe('Our first test',()=>{
  it('should pass',()=>{
      expect(true).to.equal(true);
  });
});
describe('index.html',()=>{
  it('Should say hello',(done)=>{
    const index=fs.readFileSync('./src/index.html','utf-8');
    jsdom.env(index,(err,window)=>{
      const h1=window.document.getElementsByTagName('h1')[0];
      expect(h1.innerHTML).to.equal("Users");
      done();
      window.close()
    });
  });
});
