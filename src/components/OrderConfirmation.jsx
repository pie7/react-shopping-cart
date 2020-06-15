import React, { forwardRef } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { space, color, layout, typography, flexbox, border } from 'styled-system';


const Box = styled.div`
    box-sizing: border-box;
    margin: 0;
    min-width: 0;
    width: 100%;
    ${layout}
    ${space}
    ${flexbox}
    ${border}
    ${color}
    ${typography}
`

const Text = forwardRef((props, ref) => <Box
    ref={ref}
    {...props}
/>
)

const Flex = styled(Box)({
    maxWidth: '960px',
    display: 'flex',
})

const Heading = styled.h2`
    width: 100%;
    ${color}
    ${typography}
    ${space}
`

export const OrderConfirmation = ({ orderItems }) => {
    return (
        <Flex flexWrap="wrap" p={3}>
            <Box mb={3} borderBottom="1px solid">
                <Heading textAlign='center'>
                    Thanks for your order
                </Heading>
                <Text textAlign='center' mb={3}>
                    We're processing your order now, here are the detail
                </Text>
            </Box>
            <Box mb={4} display="flex">
                <Box width={1 / 3} >
                    <Text fontWeight="bold" textAlign='right'>Order Number</Text>
                </Box>
                <Box width={2 / 3}>
                    <Text pl={3}>{orderItems.orderNumber}</Text>
                </Box>
            </Box>
            <Box mb={4} display="flex">
                <Box width={1 / 3} >
                    <Text fontWeight="bold" textAlign='right'>Order date</Text>
                </Box>
                <Box width={2 / 3}>
                    <Text pl={3}>19 May 2019 22:30</Text>
                </Box>
            </Box>
            <Box mb={4} display="flex">
                <Box width={1 / 3} >
                    <Text fontWeight="bold" textAlign='right'>Summary</Text>
                </Box>
                <Box width={2 / 3} ml={3}>
                    <Box display="flex" borderBottom="1px solid #e1e1e1" pb={3}>
                        <Box width={3 / 4} display="flex">
                            <Text fontWeight="bold">Subtotal</Text>
                        </Box>
                        <Box width={1 / 4}>
                            <Text textAlign="right">$500.75</Text>
                        </Box>
                    </Box>
                    <Box display="flex" borderBottom="1px solid #e1e1e1" py={3}>
                        <Box width={3 / 4} display="flex">
                            <Text>Paid with Credit Card</Text>
                            <Text style={{ wordWrap: 'break-word' }}>************4235</Text>
                        </Box>
                        <Box width={1 / 4}>
                            <Text textAlign="right">$500.75</Text>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box borderTop="1px solid">
                <Box my={3}>
                    <Text fontWeight="bold">Contact Us</Text>
                </Box>
                <Box>
                    <Text>Lorem ipsum dolor, sit amet consectetur adipiscing elit</Text>
                </Box>
            </Box>
        </Flex>
    )
}

OrderConfirmation.propTypes = {
    orderItems: PropTypes.object.isRequired
}

export default connect(
    state => ({
        orderItems: state.cart.orderItems
    }),
    null
)(OrderConfirmation)