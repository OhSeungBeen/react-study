import React from 'react';

const data = {
  ohseungbeen: {
    name: '오승빈',
    description: '리액트를 좋아하는 개발자',
  },
};

const Step02Url = ({ match }) => {
  const { username } = match.params;
  const profile = data[username];
  return (
    <>
      {profile ? (
        <div>
          <h1>
            {username}
            {profile.name}
          </h1>
          <h5>{profile.description}</h5>
        </div>
      ) : (
        <div>존재하지 않는 사용자 입니다.</div>
      )}
    </>
  );
};

export default Step02Url;
