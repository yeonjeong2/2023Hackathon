import styled from "styled-components";

const StyledButton = styled.button`
  padding: 30px 50px;
  border-radius: 10px;
  font-size: 1rem;
  border: 1px solid lightgray;
`;

export default function EmptyPageWithButton() {
    return (
        <div className="button">
                <StyledButton> 버튼 </StyledButton>
        </div>
    )
}