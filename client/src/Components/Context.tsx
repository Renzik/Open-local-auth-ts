import React, { createContext, useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';

// context variable that holds our data -> context
export const myContext = createContext({});

const Context = (props: any) => {
  const [userObj, setUserObj] = useState<any>();

  // fetch user data
  useEffect(() => {
    const fetchUser = async () => {
      const { data }: { data: AxiosResponse } = await axios.get(
        'http://localhost:3000/api/users/me',
        {
          // pass cookies from browser to server
          withCredentials: true,
        }
      );

      if (data) setUserObj(data);
    };

    fetchUser();
  }, []);

  return <myContext.Provider value={userObj}>{props.children}</myContext.Provider>;
};

export default Context;
