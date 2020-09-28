import React from 'react';
import styled from 'styled-components';
import btsLogo from '../../Resources/Images/BTS_Logo.png';

const MemberPanel = styled.div`
  ${(props) => props.theme.whiteBox};
  height: 110px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Member = styled.span`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MemberImg = styled.img`
  src: url(${(props) => props.src});
  width: 60px;
  height: 60px;
  border-radius: 70%;
  border: 2px solid #dbdbdb;
  border-spacing: 1px;
`;
// todo : 무지개 테두리

const NameText = styled.span`
  margin-top: 2px;
  font-weight: 500;
  font-size: 5px;
  color: #808080;
`;

export default ({ loading, data, selectAll, selectMember }) => {
  return (
    <MemberPanel>
      <Member
        onClick={() => {
          selectAll();
        }}
      >
        <MemberImg src={btsLogo} />
        <NameText>BTS</NameText>
      </Member>
      {!loading &&
        data &&
        data.getMembers &&
        data.getMembers.map((member) => (
          <Member
            key={member.username}
            onClick={() => {
              selectMember(member.posts);
            }}
          >
            <MemberImg src={member.profile} />
            <NameText>{member.username} </NameText>
          </Member>
        ))}
    </MemberPanel>
  );
};

// todo : 선택했을때 테두리 색 바뀌도록
