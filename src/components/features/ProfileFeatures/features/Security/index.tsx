
import {PassSecurity} from './PassSecurity'
import {ConnectedDevices} from './ConnectedDevices'
import { AccountActions } from './AccountActions'
export const Security = () => {
    return (
        <>
        <div className="security ">
            <PassSecurity />
            <ConnectedDevices />
            <AccountActions />
        </div>
        </>
    )
}