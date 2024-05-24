import { Component } from "@angular/core";

@Component ({
    selector: 'app-pai',
    templateUrl: './pai.component.html',
    styleUrls: ['./pai.component.css']
})

export class PaiComponent {
    start = 5
    end = 8

    selecionado: number | null = null 

    incrementarStart (){
        this.start++

    }

    incrementarEnd() {
        this.end++
       
      }

    reset(){
        
      }
      mostrarSelecionado(numero: number) {
        console.log('numero selecionado ' + numero )
        this.selecionado = numero
      }

}