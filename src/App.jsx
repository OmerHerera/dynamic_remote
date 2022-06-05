import React, { Suspense, useEffect, useState } from 'react';
import ModuleLoader from './ModuleLoader';
function App() {
  useEffect(() => {
    //http://localhost:8080/?url=https://remote-react-module.vercel.app/RemoteEntry.js&scope=remote_react_module&module=./Kylo
    const params = new URLSearchParams(window.location.search);
    const url = params.get('url');
    const scope = params.get('scope');
    const module = params.get('module');
    setRemote({ url, scope, module });
  }, []);
  const [remote, setRemote] = useState(null);
  return (
    <>
      <div className='Text'>
        This is the React container App hosted at localhost:8080
      </div>
      <div className='Host-Container'>
      <Suspense fallback={'Loading . . . '}>
        {
          remote && <ModuleLoader url={remote.url} scope={remote.scope} module={remote.module} />
        }
      </Suspense>
        
      </div>
      
    </>
      
  );
}

export default App;
