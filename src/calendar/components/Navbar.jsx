import { useAuthStore } from '../../hooks/useAuthStore';

export const Navbar = () => {
  const { user, startLogout } = useAuthStore();

  return (
    <div className='navbar navbar-dark bg-dark mb-4 px-4'>
      
      
    </div>
  );
};
