import PAYMENT_WAYS from '../../../data/paymentWays.json';
import PAYMENT_TERMS from '../../../data/paymentTerms.json';

const getSubscriptionViewState = (state) => state['SubscriptionViewReducer'];

export const getSelectedPaymentWay = (state) => getSubscriptionViewState(state).get('paymentWay');
export const getIsGiftChecked = (state) => getSubscriptionViewState(state).get('isGift');
export const getSelectedPaymentTerm = (state) => getSubscriptionViewState(state).get('paymentTerm');
export const getIsAutoProlongationChecked = (state) => getSubscriptionViewState(state).get('shouldProlongAutomatically');
export const getShouldAddDiscountChecked = (state) => getSubscriptionViewState(state).get('shouldAddDiscount');

export const paymentWays = Object.keys(PAYMENT_WAYS)
    .map(key => ({
        value: key,
        ...PAYMENT_WAYS[key]
    }));

export const paymentTerms = Object.keys(PAYMENT_TERMS)
    .map(key => {
        const item = PAYMENT_TERMS[key];
        return {
            icon: item.icon,
            value: key,
            term: item.label,
            priceTotal: (Number(key) * item.costPerMonth).toString(),
            pricePerMonth: (item.costPerMonth).toString()
        }
    });