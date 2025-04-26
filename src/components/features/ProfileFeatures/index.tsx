import { useState } from 'react';
import { FilterTypeProfile } from '../../../types/wallet';
import {LoggedNavBar} from '../../shared/LoggedNavBar/index'
import {UserProfile} from './features/UserProfile'
import {Security} from './features/Security'
import Footer from '../../shared/Footer'


export const ProfileFeatures = () => {
    const [filter, setFilter] = useState<FilterTypeProfile>('Security');
    const handleFilterClick = (filterType: FilterTypeProfile) => {
        setFilter(filterType);
      };
    return (
        <>
            <div className="profile">
                <LoggedNavBar username='John Doe'/>
                <div className="container mx-auto py-5"> 
                        <h2 className='text-5xl '>Account Settings</h2>
                        <p className='text-xl'>Manage your profile and preferences</p>
                        
                        <div className='flex w-full pt-5'>
                            <UserProfile first_name='John' last_name='Doe' email='johndoe@gmail.com' phone_number='333 333 333' date_of_birth='03.13.2000'  address='123 Main St' city='New York' state='Ny' post_code='10001'/>
                            <div className='w-2/3 ml-5'>
                                <div className="display-options flex bg-stone-300 w-full text-center py-3 rounded-2xl mb-2">
                                    <button 
                                    className={`option w-1/3 rounded-xl py-2 mx-2 cursor-pointer ${filter === 'Security' ? 'bg-white' : ''}`}
                                    onClick={() => handleFilterClick('Security')}
                                    >
                                    Security
                                    </button>
                                    <button 
                                    className={`option w-1/3 rounded-xl py-2 mx-2 cursor-pointer ${filter === 'Notifications' ? 'bg-white' : ''}`}
                                    onClick={() => handleFilterClick('Notifications')}
                                    >
                                    Notifications
                                    </button>
                                    <button 
                                    className={`option w-1/3 rounded-xl py-2 mx-2 cursor-pointer ${filter === 'Preferences' ? 'bg-white' : ''}`}
                                    onClick={() => handleFilterClick('Preferences')}
                                    >
                                    Preferences
                                    </button>
                                </div>
                                <Security />
                                
                            </div>
                            
                        </div>
                </div>
                <Footer />
            </div>
        </>
    )
}