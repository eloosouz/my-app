import { Component, OnInit, Input, OnChanges, EventEmitter, Output, SimpleChanges } from "@angular/core"; 


@Component ({
    selector: 'app-filho',
    templateUrl: './filho.component.html',
    styleUrls: ['./filho.component.css']

})

export class FilhoComponent implements OnInit { 
    @Input()
    start = 0
    @Input()
    end = 10


    @Output()
    numberSelected = new EventEmitter ()

    numeros: number[] = []


    integers: number [] = []

    ngOnInit(): void {
        this.creatNumeros()
        
    }

    creatNumeros() {
        for (let i = this.start;i <= this.end; i++) {
            this.numeros.push(i);
        }
        
    }

    selecionarNumero(numero:number) {
        this.numberSelected.next(numero)
    }

}