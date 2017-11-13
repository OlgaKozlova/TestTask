import { createSelector } from 'reselect';

import {
    getSelectedPaymentWay,
    getIsGiftChecked,
    paymentWays
} from './coreSelectors.js';

import {
    didUserSelectPaymentWay,
    isPaymentWayAllowsGift
} from './helperMethods.js';

const constants = {
    title: 'Выберите способ оплаты',
    checkbox: {
        id: 'GIFT_CHECKBOX',
        label: 'Покупаю подписку в подарок'
    }
};

export const getPaymentWaysSection = createSelector(
    [getSelectedPaymentWay, getIsGiftChecked ],
    (selectedPaymentWay, isGiftChecked) => {
        const isGiftCheckBoxVisible = !didUserSelectPaymentWay(selectedPaymentWay) || isPaymentWayAllowsGift(selectedPaymentWay);

        return {
            ...constants,
            paymentWays: paymentWays.map(way => {
                const isCurrentWaySelected = selectedPaymentWay === way.value;
                return {
                    value: way.value,
                    text: way.text,
                    description: way.description,
                    icon: way.icon,
                    isSelected: isCurrentWaySelected,
                    isShadowed: didUserSelectPaymentWay(selectedPaymentWay) && !isCurrentWaySelected,
                    isDisabled: isGiftChecked && !way.isGiftPossble
                }
            }),
            checkbox: isGiftCheckBoxVisible && {
                ...constants.checkbox,
                isChecked: isGiftChecked
            }
        }
    }
);