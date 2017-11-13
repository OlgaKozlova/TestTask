import { createSelector } from 'reselect';

import {
    getSelectedPaymentWay,
    getIsGiftChecked,
    getSelectedPaymentTerm,
    getIsAutoProlongationChecked,
    paymentTerms
} from './coreSelectors.js';

import {
    didUserSelectPaymentWay,
    isPaymentWayAllowsAutoProlongation,
    isPaymentWayAllowsPaymentTerm
} from './helperMethods.js';

const constants = {
    title: 'На какой срок',
    measurementTotal: ' руб.',
    measurementPerMonth: ' руб. / месяц',
    description: 'В конце срока подписка продлится автоматически. Вы можете выключить автопродление в любой момент в настройках или отменить его',
    checkbox: {
        id: 'AUTOPROLONGATION_CHECKBOX',
        label: 'Продлевать подписку автоматически',
        description: 'Оплачивая подписку я принимаю условия оплаты, указанные в оферте и условия автоматического продления подписки на месяц вперед'
    }
};

export const getPaymentTermsSection = createSelector(
    [getSelectedPaymentWay, getSelectedPaymentTerm, getIsAutoProlongationChecked, getIsGiftChecked ],
    (selectedPaymentWay, selectedPaymentTerm, isAutoProlongationChecked, isGiftChecked) => {
        const shouldShowPaymentTermBlock = didUserSelectPaymentWay(selectedPaymentWay)
            && isPaymentWayAllowsPaymentTerm(selectedPaymentWay);
        const shouldShowAutoProlongationCheckBox = didUserSelectPaymentWay(selectedPaymentWay)
            && isPaymentWayAllowsAutoProlongation(selectedPaymentWay)
            && !isGiftChecked;

        return shouldShowPaymentTermBlock && {
            ...constants,
            paymentTerms: paymentTerms.map(currentTerm => ({
                ...currentTerm,
                isSelected: selectedPaymentTerm === currentTerm.value
            })),
            description: isAutoProlongationChecked && constants.description,
            checkbox: shouldShowAutoProlongationCheckBox && {
                ...constants.checkbox,
                isChecked: isAutoProlongationChecked
            }
        };
    }
);