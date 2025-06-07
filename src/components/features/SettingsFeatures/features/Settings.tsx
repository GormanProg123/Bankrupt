import { LoggedNavBar } from "../../../shared/LoggedNavBar"
import Footer from "../../../shared/Footer"
import { PassSecurity } from "./PassSecurity"
import { ConnectedDevices } from "./ConnectedDevices"
import { AccountActions } from "./AccountActions"
export const Settings = () => {
    return (
        <>
            <LoggedNavBar/>
             <div className="security container mx-auto py-10 px-5 ">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl pb-2 font-bold ">Settings</h2>
                <PassSecurity />
                <ConnectedDevices />
                <AccountActions />
            </div>
            <Footer/>
        </>
    )
}