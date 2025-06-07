
import { Icon } from "../../../../atoms/Icon"
export const ConnectedDevices = () => {
    return (
        <>
            <div className="connected-devices border-2 border-gray-500 rounded-2xl p-5 my-5">
                <h2 className="text-3xl font-medium">Connected Devices</h2>
                <p>Manage devices that have access to your account</p>
                <div className="user-device pt-4 flex justify-between items-center">
                    <div className="device-info flex items-center">
                        <div className="icon-wrapper">
                            <Icon iconClass="fa-mobile" size="small"></Icon>
                        </div>
                        <div className="device pl-2">
                            <h2 className="text-2xl">iPhone 13 Pro</h2>
                            <p className="location">New York, USA • Current Device</p>
                        </div>
                    </div>
                    {/* <button className="text-black bg-transparent cursor-pointer text-black border-gray-300 border hover:border-3 px-8 py-2 rounded-xl">Remove</button>   */}
                </div>

                <div className="user-device pt-6 flex justify-between items-center">
                    <div className="device-info flex items-center">
                        <div className="icon-wrapper">
                            <Icon iconClass="fa-desktop" size="small"></Icon>
                        </div>
                        <div className="device pl-2">
                            <h2 className="text-2xl">MacBook Pro</h2>
                            <p className="location">New York, USA • Last active: 2 hours ago</p>
                        </div>
                    </div>
                    <button className="text-black bg-transparent cursor-pointer text-black border-gray-300 border hover:border-3 px-8 py-2 rounded-xl">Remove</button>      
                </div>
                
                <div className="user-device pt-6 flex justify-between items-center">
                    <div className="device-info flex items-center">
                        <div className="icon-wrapper">
                            <Icon iconClass="fa-desktop" size="small"></Icon>
                        </div>
                        <div className="device pl-2">
                            <h2 className="text-2xl">Windows PC</h2>
                            <p className="location">Chicago, USA • Last active: 5 days ago</p>
                        </div>
                    </div>
                    <button className="text-black bg-transparent cursor-pointer text-black border-gray-300 border hover:border-3 px-8 py-2 rounded-xl">Remove</button>  
                </div>  
                <button className="w-full mt-10 text-black bg-transparent cursor-pointer text-black text-medium text-xl border-gray-300 border hover:bg-gray-300 px-8 py-2 rounded-xl">Sign Out All Devices</button> 
            </div>
        </>
    )
}