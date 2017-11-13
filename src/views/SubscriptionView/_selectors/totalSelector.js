import { createSelector } from 'reselect';

import {
    getSelectedPaymentTerm,
    getIsAutoProlongationChecked,
    getShouldAddDiscountChecked
} from './coreSelectors.js';

import PAYMENT_TERMS from '../../../data/paymentTerms.json';
import DISCOUNT_SUBSCRIPTION from '../../../data/discountSubsctiption.json';

const constants = {
    title: (label) => `Итого к оплате (за ${label})`,
    note: (price) => `Далее ${price} рублей в месяц`,
    calculation: {
        progress: (total, discount) => `${total} + ${discount}`,
        resultWithDiscount: (total, discount) => ` = ${total + discount}`,
        resultWithoutDiscount: (total) => `${total}`,
        measurement: 'руб.'
    },
    checkbox: {
        id: 'DISCOUNT_CHECKBOX',
        label: (percents) => `Добавить подписку на скидку ${percents}% на весь ассортимент товара`,
        description: (term, price) => `Срок действия подписки ${term} месяцев. Стоимость подписки ${price} рублей`
    }
};

export const getTotalSection = createSelector(
    [getSelectedPaymentTerm, getIsAutoProlongationChecked, getShouldAddDiscountChecked],
    (selectedPaymentTerm, isAutoProlongationChecked, shouldAddDiscount) => {
        const costPerWholePeriod = selectedPaymentTerm && PAYMENT_TERMS[selectedPaymentTerm].costPerMonth * Number(selectedPaymentTerm);
        const discountPrice = DISCOUNT_SUBSCRIPTION.price;

        return selectedPaymentTerm && {
            ...constants,
            title: constants.title(PAYMENT_TERMS[selectedPaymentTerm].label),
            note: isAutoProlongationChecked && constants.note(DISCOUNT_SUBSCRIPTION.price),
            calculation: {
                ...constants.calculation,
                progress: shouldAddDiscount && constants.calculation.progress(costPerWholePeriod, discountPrice),
                result: shouldAddDiscount
                    ? constants.calculation.resultWithDiscount(costPerWholePeriod, discountPrice)
                    : constants.calculation.resultWithoutDiscount(costPerWholePeriod)
            },
            checkbox: {
                ...constants.checkbox,
                label: constants.checkbox.label(DISCOUNT_SUBSCRIPTION.amountInPercents),
                description: constants.checkbox.description(DISCOUNT_SUBSCRIPTION.termInMonth, discountPrice),
                isChecked: shouldAddDiscount
            }
        };
    }
);