import React from 'react';
import { connect } from 'react-redux';
import View from '../../components/DView/DView.jsx';

import Header from '../../components/DHeader/DHeader.jsx';
import SubHeader from '../../components/DSubHeader/DSubHeader.jsx';
import Main from '../../components/DMain/DMain.jsx';
import Footer from '../../components/DFooter/DFooter.jsx';
import InfoLine from '../../components/DInfoLine/DInfoLine.jsx';
import PaymentWays from '../../components/DPaymentWays/DPaymentWays.jsx';
import PaymentTerms from '../../components/DPaymentTerms/DPaymentTerms.jsx';
import PayBlock from '../../components/DPayBlock/DPayBlock.jsx';
import TotalPrice from '../../components/DTotalPrice/DTotalPrice.jsx';

import { SubscriptionViewSelector } from './SubscriptionViewSelector.js';
import { SubscriptionViewActions } from './SubscriptionViewActions.js';

import {
    SET_PAYMENT_WAY,
    SET_PAYMENT_TERM,
    TOGGLE_IS_GIFT,
    TOGGLE_SHOULD_PROLONG_AUTOMATICALLY,
    TOGGLE_SHOULD_ADD_DISCOUNT
} from './SubscriptionViewConstants.js';

export default connect(SubscriptionViewSelector, SubscriptionViewActions)(props => {
    const {subheader, infoline, paymentWays, paymentTerms, totalPrice, payBlock, footer } = props;
    return (<View>
            <Header/>
            <SubHeader
                {...subheader}
            />
            <Main>
                <InfoLine
                    {...infoline}
                />
                <PaymentWays
                    {...paymentWays }
                    onWaySelected={props[SET_PAYMENT_WAY]}
                    onCheckboxChange={props[TOGGLE_IS_GIFT]}
                />
                {
                    paymentTerms && <PaymentTerms
                        {...paymentTerms}
                        onTermSelected={props[SET_PAYMENT_TERM]}
                        onCheckboxChange={props[TOGGLE_SHOULD_PROLONG_AUTOMATICALLY]}
                    />
                }
                {
                    totalPrice && <TotalPrice
                        {...totalPrice}
                        onCheckboxChange={props[TOGGLE_SHOULD_ADD_DISCOUNT]}
                    />
                }
                <PayBlock
                    {...payBlock}
                    onButtonClick={props.handlePayButton}
                />
            </Main>
            <Footer
                {...footer}
            />
        </View>
    )
});
