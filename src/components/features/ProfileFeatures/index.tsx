import {LoggedNavBar} from '../../shared/LoggedNavBar/index'
import {UserProfile} from './features/UserProfile'
import Footer from '../../shared/Footer'


export const ProfileFeatures = () => {
    return (
        <>
            <div className="profile">
                <LoggedNavBar/>
                <div className="container mx-auto py-5"> 
                        <h2 className='text-5xl '>Profile</h2>
                        <p className='text-xl'>Manage your profile</p>
                        
                        <div className='flex w-full pt-5'>
                            <UserProfile first_name='John' last_name='Doe' email='johndoe@gmail.com' phone_number='333 333 333' date_of_birth='03.13.2000'  address='123 Main St' city='New York' state='Ny' post_code='10001'/>
                        </div>
                </div>
                <Footer />
            </div>
        </>
    )
}