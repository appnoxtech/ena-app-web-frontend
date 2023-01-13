import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import { EditOutlined, DeleteFilled, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import LoginInput from '../../component/common-components/loginInput';
import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material';
import ButtonComp from '../../component/common-components/buttonComp/ButtonComp';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { ChangePasswordService, UpdateProfileService } from '../../services/user/UserService';
import useErrorHandler from '../../services/handler/ErrorHandler';
import NotificationContext from '../../context/Notification/NotificationContext';
import '../../assets/global/global.css';
import { useDispatch } from 'react-redux';
import { updateUserData } from '../../redux/reducer/UserDetails/userAction';
import AddIcon from '@mui/icons-material/Add';
import KeyIcon from '@mui/icons-material/Key';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import HomeIcon from '@mui/icons-material/Home';
import { getAddressList } from '../../services/address/AddressService';
import NoAddressAnimation from '../../assets/animations/NoAddress.json';
import AddressTab from './Tabs/AddressTab';
import PasswordTab from './Tabs/PasswordTab';
import UserDetailsTab from './Tabs/UserDetailsTab';
interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


export default function UserTabs({ user }) {
    const [value, setValue] = React.useState(0); 
    const [isEdit, setIsEdit] = React.useState(false);
    const [isMediumScreen, setIsMediumScreen] = React.useState(window.innerWidth <= 768 ? true : false);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const handleScreenWidth = () => {
        if (window.innerWidth <= 768) {
            setIsMediumScreen(true)
        } else {
            setIsMediumScreen(false);
        }
    }

    React.useEffect(() => {
        window.addEventListener('resize', handleScreenWidth);
        return (() => {
            window.removeEventListener('resize', handleScreenWidth);
        });
    }, []);

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab
                        sx={{ fontWeight: 'bold' }}
                        iconPosition="start"
                        icon={<ManageAccountsIcon />}
                        label={isMediumScreen ? '' : isEdit ? "Update Profile" : "Profile Details"}
                        {...a11yProps(0)}
                    />
                    <Tab
                        sx={{ fontWeight: 'bold' }}
                        iconPosition="start"
                        icon={<KeyIcon />}
                        label={isMediumScreen ? " " : "Change Password"}
                        {...a11yProps(1)}
                    />
                    {
                        user.userType === 'customer' ?
                            <Tab
                                sx={{ fontWeight: 'bold' }}
                                icon={<HomeIcon />}
                                iconPosition="start"
                                label={isMediumScreen ? "" : "Manage Address"}
                                {...a11yProps(2)}
                            /> : null
                    }
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <UserDetailsTab user={user} isEdit={isEdit} setIsEdit={setIsEdit} />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <PasswordTab />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <AddressTab />
            </TabPanel>
        </Box>
    );
}