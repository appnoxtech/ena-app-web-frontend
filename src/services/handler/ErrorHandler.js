import React, { useContext } from "react"
import NotificationContext from "../../context/Notification/NotificationContext";

const useErrorHandler = () => {
    const Notification = useContext(NotificationContext);

    const ShowError = (err) => {
        try {
            if (err.response.status == 401) {
                Notification({
                  title: 'Technical Error',
                  description: 'Something Went Wrong !',
                  type: 'error'
                })
            }
            else if (err == undefined) {
                Notification({
                    title: 'Internal Error',
                    description: 'Something Went Wrong !',
                    type: 'error'
                  })
            }
            else if (err.message != undefined && err.response == undefined) {
                //ShowToast(err.message)
                Notification({
                    title: 'Error',
                    description: err.message,
                    type: 'error'
                  })
            }
            else if (err.response == undefined) {
                // ShowToast('Internal Error');
                Notification({
                    title: 'Internal Error',
                    description: 'Something Went Wrong !',
                    type: 'error'
                });
            }
            else if (err.response.data == undefined) {
               // ShowToast('Internal Error');
                Notification({
                    title: 'Internal Error',
                    description: 'Something Went Wrong !',
                    type: 'error'
                });
            }
            else if (err.response.data.msg != undefined) {
                //ShowToast(err.response.data.msg);
                Notification({
                    title: 'Error',
                    description: err.response.data.msg,
                    type: 'error'
                });
            }
            else if (err.response.data.errors != undefined) {
                if (err.response.data.errors[0].message) {
                    //ShowToast(err.response.data.errors[0].message);
                    Notification({
                        title: 'Error',
                        description: err.response.data.errors[0].message,
                        type: 'error'
                    });
                }
                else if (err.response.data.errors[0].msg) {
                    //ShowToast(err.response.data.errors[0].msg);
                    Notification({
                        title: 'Error',
                        description: err.response.data.errors[0].msg,
                        type: 'error'
                    });
                }
            } else {
                Notification({
                    title: 'Error',
                    description: 'Internal Error',
                    type: 'error'
                });
            }
        } catch (error) {
            Notification({
                title: 'Error',
                description: 'Something Went Wrong !',
                type: 'error'
            });
        }
    }
    return ShowError;
}

export default useErrorHandler;