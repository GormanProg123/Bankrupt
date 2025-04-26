import { Icon } from "../../../../../atoms/Icon"
import {useState,useEffect} from 'react';
import { styled } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';


export const PassSecurity = () => {

    const [twoFactor,setTwoFactor] = useState<boolean>(false);
    const [loginAlerts,setLoginAlerts] = useState<boolean>(false);
    
    useEffect(() => {
        console.log(twoFactor)
    },[twoFactor])
    return (
        <>
            <div className="pass-security border-2 border-gray-300 rounded-2xl p-5 mt-5">
                <h3 className="text-3xl font-medium">Password & Authentication</h3>
                <p className="text-xl pb-3">Manage your password and security settings</p>
                <div className="pass-block ">
                    <div className="pass-block-main pt-5">
                        <div className="wrap flex justify-between items-center">
                            <div className="flex items-center"><Icon iconClass="fa-key" size="small"></Icon> <p className="text-2xl pl-2">Password</p></div>
                            <button className="text-black bg-transparent cursor-pointer text-black border-gray-300 border hover:border-3 px-3 py-2 rounded-xl">Change Password</button>   
                        </div>
                        <p className="last-chang text-gray-400">Last changed: 45 days ago</p>
                        <div className="line w-full bg-gray-300 h-[2px] mt-3"></div>
                    </div>
                    <div className="pass-block-main pt-5">
                        <div className="wrap flex justify-between items-center">
                            <div className="flex items-center"><Icon iconClass="fa-lock" size="small"></Icon> <p className="text-2xl pl-2">Two-Factor Authentication</p></div>
                            <FormControlLabel
                                control={<IOSSwitch sx={{ m: 1 }}  />}
                                label=""
                                onChange={() => setTwoFactor(!twoFactor)}
                            />
                        </div>
                        <p className="last-chang text-gray-400">Add an extra layer of security to your account</p>
                        <div className="line w-full bg-gray-300 h-[2px] mt-3"></div>    
                    </div>
                    <div className="pass-block-main pt-5">
                        <div className="wrap flex justify-between items-center">
                            <div className="flex items-center"><Icon iconClass="fa-bell" size="small"></Icon> <p className="text-2xl pl-2">Login Alerts</p></div>
                            <FormControlLabel
                                control={<IOSSwitch sx={{ m: 1 }}  />}
                                label=""
                                onChange={() => setTwoFactor(!twoFactor)}
                            />
                        </div>
                        <p className="last-chang text-gray-400">Receive notifications for new logins to your account</p>
                        <div className="line w-full bg-gray-300 h-[2px] mt-3"></div>
                    </div>
                        
                </div>
            </div>
        </>
    )
}



const IOSSwitch = styled((props) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
  ))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    '& .MuiSwitch-switchBase': {
      padding: 0,
      margin: 2,
      transitionDuration: '300ms',
      '&.Mui-checked': {
        transform: 'translateX(16px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          backgroundColor: '#65C466',
          opacity: 1,
          border: 0,
          ...theme.applyStyles('dark', {
            backgroundColor: '#2ECA45',
          }),
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 0.5,
        },
      },
      '&.Mui-focusVisible .MuiSwitch-thumb': {
        color: '#33cf4d',
        border: '6px solid #fff',
      },
      '&.Mui-disabled .MuiSwitch-thumb': {
        color: theme.palette.grey[100],
        ...theme.applyStyles('dark', {
          color: theme.palette.grey[600],
        }),
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.7,
        ...theme.applyStyles('dark', {
          opacity: 0.3,
        }),
      },
    },
    '& .MuiSwitch-thumb': {
      boxSizing: 'border-box',
      width: 22,
      height: 22,
    },
    '& .MuiSwitch-track': {
      borderRadius: 26 / 2,
      backgroundColor: '#E9E9EA',
      opacity: 1,
      transition: theme.transitions.create(['background-color'], {
        duration: 500,
      }),
      ...theme.applyStyles('dark', {
        backgroundColor: '#39393D',
      }),
    },
  }));
  