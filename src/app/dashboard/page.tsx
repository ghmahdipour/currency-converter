import { getServerSession } from 'next-auth'
import UserInfo from '@components/UserInfo';
import { redirect } from 'next/navigation';

const Dashboard = async () => {
    const session = await getServerSession();
    if(!session || !session.user){
        redirect('/')
    }
    return <UserInfo />
}

export default Dashboard;