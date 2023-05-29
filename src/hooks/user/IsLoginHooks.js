export const useIsLoginHook = () => {
    const data = localStorage.getItem('user')
    if (data){
        const user = JSON.parse(data);
        console.log('user inside hook', user);
        return user.isLogin
    }else {
        return false
    }
}