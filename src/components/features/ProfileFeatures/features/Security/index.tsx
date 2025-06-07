
import {PassSecurity} from '../../../SettingsFeatures/features/PassSecurity'
import {ConnectedDevices} from '../../../SettingsFeatures/features/ConnectedDevices'
import { AccountActions } from '../../../SettingsFeatures/features/AccountActions'
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