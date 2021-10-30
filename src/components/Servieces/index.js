import styled from "styled-components"
import Service from "./Service";


import { ReactComponent as ShippingIcon } from "../../assets/shipping.svg"
import { ReactComponent as RefundIcon } from "../../assets/refund.svg"
import { ReactComponent as SupportIcon } from "../../assets/support.svg"

const Services = () => {
    return (
        <Wrapper>
            <Service
                name="FREE SHIPPING"
                icon={<ShippingIcon />}
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />

            <Service
                name="100% REFUND"
                icon={<RefundIcon />}
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />

            <Service
                name="SUPPORT 24/7"
                icon={<SupportIcon />}
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
        </Wrapper>
    )
}

export default Services;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 191px;
    justify-content: space-between;
`;