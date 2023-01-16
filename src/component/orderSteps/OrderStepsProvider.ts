export const orderStepsProvider = (orderStatus: string) => {
   if(orderStatus !== 'CANCELED'){
     return [
        {
            title: 'Order Placed',
            description: 'Order Placed Successfully',
          },
          {
            title: 'Assigned',
            description: 'Order has been assigned to an Agent',
          },
          {
            title: 'Out For Delivery',
            description: 'Agents has accepted your Order',
          },
          {
            title: 'Delivered',
            description: 'Order has been delivered',
          },
     ]
   }else{
    return [
        {
            title: 'Order Placed',
            description: 'Order Placed Successfully',
          },
          {
            title: 'Canceled',
            description: 'Order has been Cancelled',
          },
          {
            title: 'Returned',
            description: 'Order has been returned to the store',
          },
     ]
   }
}

