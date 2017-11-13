import Immutable from 'immutable';
import {
    TOGGLE_IS_GIFT,
    SET_PAYMENT_TERM,
    SET_PAYMENT_WAY,
    TOGGLE_SHOULD_ADD_DISCOUNT,
    TOGGLE_SHOULD_PROLONG_AUTOMATICALLY
} from './SubscriptionViewConstants.js';
import PAYMENT_WAYS from '../../data/paymentWays.json';

const SubscriptionViewInitial = new Immutable.Map({
    paymentWay: null,
    isGift: false,
    paymentTerm: null,
    shouldProlongAutomatically: false,
    shouldAddDiscount: false
});

export const SubscriptionViewReducer = (state = SubscriptionViewInitial, action) => {
    const payload = action.payload;

    switch (action.type) {
        case TOGGLE_IS_GIFT: {
            /* When gift is toggled to true, we should reset:
                - paymentWay if it is incompatible with gift
                - paymentTerm (if we reset paymentWay)
                - autoProlongation because it is incompatible with gift
            */
            const currentPaymentWay = state.get('paymentWay');
            const newValue = !state.get('isGift');

            const shouldResetPaymentWayAndTerm = newValue
                && currentPaymentWay && !PAYMENT_WAYS[currentPaymentWay].isGiftPossble;

            return state
                .update('isGift', () => newValue)
                .update('shouldProlongAutomatically', shouldProlongAutomatically =>
                    newValue ? false : shouldProlongAutomatically)
                .update('paymentWay', paymentWay => shouldResetPaymentWayAndTerm ? null : paymentWay)
                .update('paymentTerm', paymentTerm => shouldResetPaymentWayAndTerm ? null : paymentTerm)
        }
        case SET_PAYMENT_WAY: {
            /* When paymentWay is selected, we should reset:
                - paymentTerm if paymentWay doesn't support one
                - isGift if paymentWay doesn't support one
                - autoProlongation if paymentWay doesn't support one
            */
            const paymentWay = payload.paymentWay;
            const paymentWayInfo = PAYMENT_WAYS[paymentWay];
            const shouldResetGift = !paymentWayInfo.isGiftPossble;
            const shouldResetPaymentTerm = !paymentWayInfo.isPaymentTermAvailable;
            const shouldResetAutoProlongation = !paymentWayInfo.isAutoProlongationAvailable;

            return state
                .update('isGift', isGift => shouldResetGift ? false : isGift)
                .set('paymentWay', paymentWay)
                .update('paymentTerm', paymentTerm => shouldResetPaymentTerm ? null : paymentTerm)
                .update('shouldProlongAutomatically', shouldProlongAutomatically =>
                    shouldResetAutoProlongation ? false : shouldProlongAutomatically)
        }
        case SET_PAYMENT_TERM: {
            return state
                .set('paymentTerm', payload.paymentTerm);
        }
        case TOGGLE_SHOULD_ADD_DISCOUNT: {
            return state
                .update('shouldAddDiscount', shouldAddDiscount => !shouldAddDiscount);
        }
        case TOGGLE_SHOULD_PROLONG_AUTOMATICALLY: {
            /* AutoProlongation is incompatible with gift, so gift should be reset if autoProlongation is on */
            const newValue = !state.get('shouldProlongAutomatically');

            return state
                .update('shouldProlongAutomatically', () => newValue)
                .update('isGift', isGift => newValue ? false : isGift);
        }
        default: {
            return state;
        }
    }
};