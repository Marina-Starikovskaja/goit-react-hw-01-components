import styled from '@emotion/styled';
// export const ProfileWraper = styled.div`
//   width: 300px;
//   background-color: white;
//   margin: 0 auto;
//   margin-top: 50px;
// `;

export const StatisticsSection = styled.section`
  width: 50%;
  margin-top: 50px;
  background-color: white;
  box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1),
  0px 1px 2px rgba(0, 0, 0, 0.08),
  0px 2px 2px rgba(0, 0, 0, 0.12);
`;
export const TitleName = styled.h2`
  padding: 15px;
  width: 50%;
  margin: 0 auto;
  text-align: center;
  text-transform: uppercase;

  color: #959da2;
`;
export const StatsList = styled.ul`
  display: flex;
  justify-content: center;
  text-align: center;
`;
export const Item = styled.li`
  padding: 15px 0;
  color: white;
  width: calc(100% / 5);
`;
export const Label = styled.span`
  display: block;
  font-weight: 400;
`;
export const Percentage = styled.span`
  margin-top: 10px;
  display: block;
  font-size: 25px;
  font-weight: 700;
`;