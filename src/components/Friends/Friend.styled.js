import styled from '@emotion/styled';

export const FriendsList = styled.ul`
  width: 30%;
  margin: 0 auto;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
export const FriendsElements = styled.li`
  padding: 15px;
  display: flex;
  align-items: center;
  gap: 30px;
  box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1),
  0px 1px 2px rgba(0, 0, 0, 0.08),
  0px 2px 2px rgba(0, 0, 0, 0.12);
  background-color: white;
`;
export const Online = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: green;
`;
export const Offline = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: red;
`;
export const Img = styled.img`
  width: 48px;
  border-radius: 10px;
`;
export const Name = styled.p`
  font-size: 20px;
  font-weight: 700;
`;