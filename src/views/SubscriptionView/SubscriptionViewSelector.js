import { createSelector } from 'reselect';

import {
    getSelectedPaymentWay,
    getIsGiftChecked,
    getSelectedPaymentTerm,
    getIsAutoProlongationChecked,
    getShouldAddDiscountChecked
} from './_selectors/coreSelectors.js';
import { getPaymentTermsSection } from './_selectors/paymentTermsSelector.js';
import { getPaymentWaysSection } from './_selectors/paymentWaysSelector.js';
import { getTotalSection } from './_selectors/totalSelector.js';
import { getPayBlock } from './_selectors/payBlockSelector.js';
import { getFooter } from './_selectors/footerSelector.js';
import { getSubHeader } from './_selectors/subHeaderSelector.js';
import { getInfoLine } from './_selectors/infolineSelector.js';

export const getPaymentData = createSelector(
    [getSelectedPaymentWay, getIsGiftChecked, getSelectedPaymentTerm, getIsAutoProlongationChecked, getShouldAddDiscountChecked],
    (paymentWay, isGift, paymentTerm, shouldProlongAutomatically, shouldAddDiscount) => ({
        paymentWay,
        isGift,
        paymentTerm,
        shouldProlongAutomatically,
        shouldAddDiscount
    })
);

export const SubscriptionViewSelector = (state) => createSelector(
    [getSubHeader, getInfoLine, getPaymentWaysSection, getPaymentTermsSection, getTotalSection, getPayBlock, getFooter],
    (subheader, infoline, paymentWays, paymentTerms, totalPrice, payBlock, footer) => {
    return {
        subheader,
        infoline,
        paymentWays,
        paymentTerms,
        totalPrice,
        payBlock,
        footer
    }
});
