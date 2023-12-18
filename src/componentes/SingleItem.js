import { moneyFormat } from "../helpers";

export const SingleItem = ({price, type, id, eliminarItem,editItem}) => {
    const HandleDelete = (e) => {
        e.preventDefault();
        const answer = window.confirm(`Borrar suspcripciones a ${type}`);
        if (answer) {
            eliminarItem(id);
        }
        
    }
    const HandleEdit = e => {
        e.preventDefault()
        editItem(id);
    }
    const images = require.context('../img', true);
    const urlImage = images(`./${type}.png`);

    return(
        <div className="single-item" >
            <img src={ urlImage } alt='Services' />
            <h3>Precio: {moneyFormat(Number(price))} </h3>
            <a href="" onClick={ HandleDelete } >Borrar</a>
            <a href="" onClick={ HandleEdit} >Editar</a>
        </div>
    );
}