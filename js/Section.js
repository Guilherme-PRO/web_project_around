export default class Section{
    constructor({items, renderer}, selector){
        this._items = items // cards
        this._renderer = renderer // acão
        this._selector = selector // elemento css
    }

    addItem(card){
        const section = document.querySelector(this._selector)
        section.append(card);
    }

    renderItens(){
        this._items.forEach(card => {
            this._renderer(card);
        });
    }
}