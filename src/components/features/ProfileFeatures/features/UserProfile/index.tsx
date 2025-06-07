
import { Icon } from '../../../../atoms/Icon';
interface UserProfileProps {
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string;
    date_of_birth: string;
    address: string;
    city: string;
    state: string;
    post_code: string;
  }
  
  export const UserProfile = (props: UserProfileProps) => {
    
    return (
      <div className="w-2/3 border-2 border-gray-300 rounded-2xl p-10 max-w-3xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <p className="text-2xl font-semibold">Profile</p>
          <p className="text-lg text-gray-500">Your personal information</p>        
          <div className="flex justify-center">
            <div className="bg-gray-400 w-32 h-32 rounded-full mt-6" />
          </div>
        </div>
  
        <div className="grid grid-cols-2 gap-6  ">
          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700" htmlFor="first_name">First Name</label>
            <div className="bg-gray-200 p-3 rounded-lg">{props.first_name}</div>
          </div>
          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700" htmlFor="last_name">Last Name</label>
            <div className="bg-gray-200 p-3 rounded-lg">{props.last_name}</div>
          </div>
        </div>
  
        <div className="space-y-1">

          <label className="text-sm font-medium text-gray-700" htmlFor="email">Email Address</label>
          <span className='flex items-center'>
            <Icon iconClass='fa-envelope' size="small"></Icon>
            <div className="bg-gray-200 ml-2    p-3 rounded-lg w-full">{props.email}</div>
          </span>
          
        </div>
  
        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700">Phone Number</label>
          <span className='flex items-center'>
            <Icon iconClass='fa-phone' size="small"></Icon>
            <div className="bg-gray-200 ml-2  p-3 rounded-lg w-full">{props.phone_number}</div>
          </span>
          
         
        </div>
  
        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700" htmlFor="date_of_birth">Date of Birth</label>
          <div className="bg-gray-200 p-3 rounded-lg">{props.date_of_birth}</div>
        </div>
  
        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700" htmlFor="address">Address</label>
          <div className="bg-gray-200 p-3 rounded-lg">{props.address}</div>
        </div>
  
        <div className="grid grid-cols-3 gap-6">
          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700">City</label>
            <div className="bg-gray-200 p-3 rounded-lg">{props.city}</div>
          </div>
          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700">State</label>
            <div className="bg-gray-200 p-3 rounded-lg">{props.state}</div>
          </div>
          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700">ZIP Code</label>
            <div className="bg-gray-200 p-3 rounded-lg">{props.post_code}</div>
          </div>
        </div>
      </div>
    );
  };
  