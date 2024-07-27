import { useRouter } from 'next/router';

interface UserInfoProps {
    user: { username: string };
    onLogout: () => void;
}

const UserInfo: React.FC<UserInfoProps> = ({ user, onLogout }) => {

    const handleLogout = () => {
        localStorage.removeItem('token');
        onLogout();
        window.location.href = '/carros';
    };

    return (
        <div className="flex items-center gap-2">
            <span>Bem-vindo, {user.username}</span>
            <button onClick={handleLogout} className="ml-4 px-4 py-2 bg-red-500 text-white rounded">Logout</button>
        </div>
    );
};

export default UserInfo;