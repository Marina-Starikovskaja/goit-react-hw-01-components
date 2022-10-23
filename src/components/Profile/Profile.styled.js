import styled from '@emotion/styled';

export const ProfileWraper = styled.div`
  width: 300px;
  background-color: white;
  margin: 0 auto;
  box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1),
  0px 1px 2px rgba(0, 0, 0, 0.08),
  0px 2px 2px rgba(0, 0, 0, 0.12);
`;
export const Description = styled.div`
  padding: 35px 15px 15px 15px;
  text-align: center;
`;
export const Img = styled.img`
  border-radius: 50%;
  width: calc(100% / 3);
  display: block;
  margin: 0 auto;
`;
export const Name = styled.p`
  margin-top: 20px;
  font-size: 22px;
  font-weight: 700;
`;
export const Text = styled.p`
  margin-top: 15px;
  color: #94a0ac;
`;

export const Stats = styled.ul`
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  display: flex;
  width: 100%;
  border-top: 1px solid #e4e9f0;
  list-style-type: none;
  background-color: #f3f6f9;
`;
export const StatsElements = styled.li`
  padding: 15px 0;
  width: calc(100% / 3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &:not(:last-child) {
    border-right: 1px solid #e4e9f0;
  }
`;
export const Label = styled.span`
  display: block;
  color: #94a0ac;
`;
export const Quantity = styled.span`
  margin-top: 10px;
  display: block;
  font-weight: 700;
`;