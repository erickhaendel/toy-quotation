import React from 'react';
import MaterialIcon, { colorPalette } from 'material-icons-react';

import classnames from 'classnames';

import './Table.css';

const dolar = 4.1;

export default function Table({ items }) {



    function getStatusIcon(price) {
        if (price <= 350) {
            return <MaterialIcon icon="sentiment_very_dissatisfied" color="#FFF" />;
        }
        else if (price > 350 && price <= 750) {
            return <MaterialIcon icon="sentiment_dissatisfied" color="#FFF" />;
        }
        else if (price > 750 && price <= 1000) {
            return <MaterialIcon icon="sentiment_satisfied" color="#FFF" />;
        }
        else {
            return <MaterialIcon icon="sentiment_very_satisfied" color="#FFF" />;
        }
    }

    function getClassname(price) {
        if (price <= 350) {
            return 'danger'; //#E74C3C';
        }
        else if (price > 350 && price <= 750) {
            return 'warning' //'#F1C40F';
        }
        else if (price > 750 && price <= 1000) {
            return 'default' //'#2980B9';
        }
        else {
            return 'success' //'#2ECC71';
        }
    }

    function getTax(item) {
        return (
            (
                (
                    parseFloat(item.precoEua) +
                    parseFloat(item.ship)
                ) * 0.6
            )
            * dolar
        );
    }

    function getWithTax(item) {
        return (
            parseFloat(item.precoBrasil) -
            (
                parseFloat(item.precoEua) +
                parseFloat(item.ship)
            ) * dolar - getTax(item)
        );
    }

    function getWithoutTax(item) {
        return (
            parseFloat(item.precoBrasil) -
            (
                parseFloat(item.precoEua) +
                parseFloat(item.ship)
            ) * dolar
        );
    }


    return (
        <div className="container-table">
            <div className="table-header">
                <div className="table-col  table-col-lg">Colecionável</div>
                <div className="table-col">Preço EUA</div>
                <div className="table-col">Shippment</div>
                <div className="table-col">Preço Brasil</div>
                <div className="table-col">Com Taxa</div>
                <div className="table-col">Sem Taxa</div>
            </div>


            <div className="table-body">
                {
                    items.map((item, key) => (
                        <div className="table-item">
                            <div className="table-col table-item-product  table-col-lg">
                                <div className={classnames(
                                    'table-item-icon',
                                    getClassname(getWithTax(item))
                                )}>
                                    {
                                        getStatusIcon(getWithTax(item))
                                    }
                                </div>
                                <div className="table-item-text">
                                    <strong>{item.personagem}</strong>
                                    <small>{item.marca} - {item.escala}</small>
                                </div>
                            </div>
                            <div className="table-col">$ {item.precoEua}</div>
                            <div className="table-col">$ {item.ship}</div>
                            <div className="table-col">R$ {item.precoBrasil}</div>
                            <div className="table-col">R$ {getWithTax(item)}</div>
                            <div className="table-col">R$ {getWithoutTax(item)}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
