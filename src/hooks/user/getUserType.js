export const useGetUserType = () => {
    const data = localStorage.getItem('user');
    if(data){
        const user = JSON.parse(data);
        const {userType} = user;
        return userType;
    }else {
        return 'customer';
    }
}