import PAYMENT_WAYS from '../../../data/paymentWays.json';

export const didUserSelectPaymentWay = (selectedWay) => selectedWay !== null;
export const didUserSelectPaymentTerm = (selectedTerm) => selectedTerm !== null;
export const isPaymentWayAllowsGift = (paymentWay) => PAYMENT_WAYS[paymentWay].isGiftPossble;
export const isPaymentWayAllowsPaymentTerm = (paymentWay) => PAYMENT_WAYS[paymentWay].isPaymentTermAvailable;
export const isPaymentWayAllowsAutoProlongation = (paymentWay) => PAYMENT_WAYS[paymentWay].isAutoProlongationAvailable;