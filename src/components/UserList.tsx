import React, { useEffect } from "react";

import { useAction } from "./hooks/useAction";

import { useTypeSelector } from "./hooks/useTypeSelector";

const UserList: React.FC = () => {
  const { users, error, loading } = useTypeSelector((state) => state.user);
  const { fetchUsers } = useAction();
  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return <h1>Идет загрузка</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
};

export default UserList;
