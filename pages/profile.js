import React from 'react'
import ProfilePage from '../components/templates/ProfilePage'


const Profile =() => {

  return (
    <>
      <ProfilePage />
    </>
  )
}

export default Profile;

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: "/signin",
        permanent: false,
      },
    };
  }

  return { props: {} };
}
