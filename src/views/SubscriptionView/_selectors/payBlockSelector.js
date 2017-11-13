import { createSelector } from 'reselect';

import {
    getSelectedPaymentWay,
    getSelectedPaymentTerm
} from './coreSelectors.js';

import {
    didUserSelectPaymentWay,
    didUserSelectPaymentTerm
} from './helperMethods.js';

const constants = {
    button: {
        label: 'Оплатить'
    },
    info: [
        {
            id: 'comission',
            icon: 'comission',
            text: 'Нет комиссий при оплате банковскими картами, Яндекс.Деньгами и QIWI'
        },
        {
            id: 'security',
            icon: 'security',
            text: 'Все платежи надежно защищены и соответствуют международным стандартам'
        }
    ]
};

export const getPayBlock = createSelector(
    [getSelectedPaymentTerm, getSelectedPaymentWay],
    (paymentTerm, paymentWay) => ({
        ...constants,
        button: didUserSelectPaymentWay(paymentWay) && {
            ...constants.button,
            isDisabled: !didUserSelectPaymentTerm(paymentTerm)
        }
    })
);
