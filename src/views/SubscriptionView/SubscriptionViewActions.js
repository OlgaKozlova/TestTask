import {
    TOGGLE_IS_GIFT,
    SET_PAYMENT_TERM,
    SET_PAYMENT_WAY,
    TOGGLE_SHOULD_ADD_DISCOUNT,
    TOGGLE_SHOULD_PROLONG_AUTOMATICALLY
} from './SubscriptionViewConstants.js';

import { getPaymentData } from './SubscriptionViewSelector.js';

export const SubscriptionViewActions = {
    [ TOGGLE_IS_GIFT ]: () => ({
        type: TOGGLE_IS_GIFT
    }),

    [ SET_PAYMENT_WAY ]: (paymentWay) => ({
        type: SET_PAYMENT_WAY,
        payload: {
            paymentWay
        }
    }),

    [ SET_PAYMENT_TERM ]: (paymentTerm) => ({
        type: SET_PAYMENT_TERM,
        payload: {
            paymentTerm
        }
    }),

    [ TOGGLE_SHOULD_ADD_DISCOUNT ]: () => ({
        type: TOGGLE_SHOULD_ADD_DISCOUNT
    }),

    [ TOGGLE_SHOULD_PROLONG_AUTOMATICALLY ]: () => ({
        type: TOGGLE_SHOULD_PROLONG_AUTOMATICALLY
    }),

    handlePayButton: () => (dispatch, getState) => {
        const data = getPaymentData(getState());
        console.log(data)
    }
};

