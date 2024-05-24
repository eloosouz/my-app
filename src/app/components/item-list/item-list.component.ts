import { Component, Directive } from "@angular/core";
import { Observable } from "rxjs";
import { ItemService } from "src/app/services/item.service";


@Component ({
    selector: 'app-item-list',
    templateUrl : './item-list.component.html' ,
    styleUrls : [ './item-list.component.css' ]
})

export class ItemListComponent {
    itemList:string []= [];
    itemObservable : Observable<string[]>

    constructor(private itemService: ItemService) {
        this.itemList = itemService.getItemList()
        this.itemObservable = itemService.getItemsObservable()

    }

    remove(Item: string) {
        const Index = this.itemList.indexOf(Item)
        this.itemList.splice(Index, 1)

    }

    removeObservable(item: string) {
        this.itemService.removeObservable(item);
        }
}