import React, { useContext } from "react"
import NotificationContext from "../../context/Notification/NotificationContext";
import { useNavigate } from "react-router";

const useErrorHandler = () => {
    const Notification = useContext(NotificationContext);
    const navigatie = useNavigate();

    const ShowError = (err) => {
        try {
            console.log('Error', err);
            if (err.response.status == 401) {
               Notification({
                  title: 'Authentication',
                  description: 'Un-Authorised !',
                  type: 'error'
                });
                return navigatie('/');
            } else if(err.response.status == 500) {
                Notification({
                    title: 'Authentication',
                    description: err.response.data,
                    type: 'error'
                  });
            }
            else if(err.response.data.msg) {
               return Notification({
                    title: 'Error',
                    description: err.response.data.msg,
                    type: 'error'
                });
            }else {
                return Notification({
                    title: 'Error',
                    description: 'Internal Error',
                    type: 'error'
                });
            }
            
        } catch (error) {
            return Notification({
                title: 'Error',
                description: 'Something Went Wrong !',
                type: 'error'
            });
        }
    }
    return ShowError;
}

export default useErrorHandler;