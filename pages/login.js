import {getProviders, signIn} from "next-auth/react";

function Login({providers}) {
  return (
    <div>
      <img className="w-48 mb-5" src="https://links.papareact.com/9xl" alt="login into spotify" />
      
      { Object.values(providers).map((provider)=> (
       <div key={provider.name}>
          <button>Login with {provider.name}</button>
        </div>
      ))}
    </div>
  )
}

export default Login

/* before the login page loads it needs to render on the server
and get the providers. SERVER SIDE RENDER for credential/login pages etc */
export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: {
      providers,
    }
  }
}