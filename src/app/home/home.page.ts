import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  nomeX = '';
  nomeY = '';
  url = 'http://lucasreno.kinghost.net/love-calculator/';
  resultado: number = 0;
  mensagem = '';
  img = '';
  sorteando: boolean = false;

  constructor(private http: HttpClient) {}

  async Misturar(){
    console.log(this.url + this.nomeX + '/' + this.nomeY);

    for (let i = 0; i < 10; i++) {
      this.sorteando = true;
      let numSorteado = Math.random();
      this.resultado = Math.floor(numSorteado * 99 + 1);
      await new Promise(f => setTimeout(f, 100));
    }
    
    this.sorteando = false;

    this.http.get<any>(this.url + this.nomeX + '/' + this.nomeY).subscribe(
      (resposta) => {
        this.resultado = resposta;

        if(this.resultado >= 0 && this.resultado <= 20){
          this.mensagem = 'Melhor passa pra proxima amigo!!!';
          this.img = '../../assets/img/mozao.jpg';
        }
        else if(this.resultado <= 40){
          this.mensagem = 'Vai ser um longo caminho!!!';
          this.img = '../../assets/img/caminho.jpg';
        }
        else if(this.resultado <= 60){
          this.mensagem = 'Se esforça ai cara!!!';
          this.img = '../../assets/img/esforco.jpg';
        }
        else if(this.resultado <= 80){
          this.mensagem = 'Vai que eu confio em você!!!';
          this.img = '../../assets/img/confia.jpg';
        }
        else if(this.resultado <= 100){
          this.mensagem = 'Só vai pro abraço ( ͡° ͜ʖ ͡°)';
          this.img = '../../assets/img/TEAMOGIFS.gif';
        }
        else{
          this.mensagem = 'Erro!';
        }
      }
    );
  }
}