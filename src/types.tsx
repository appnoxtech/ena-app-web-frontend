

export interface orderType {
   _id: string,
   userId: string,
   addressInfo: addressType,
   productList: [products],
   amount: number,
   tax: number,
   netAmount: number,
   status: string,
   createdAt: number,
}

export interface addressType {
    _id: string,
    country: string,
    pincode: number,
    city: string,
    state: string,
    buildingName: string,
    street: string
}

export interface products {
    productId : string,
    quantity : number,
    price : number,
    bidAmount : number,
    vegName : string,
    engVegName : string,
    image : string,
}

export interface user {
    firstName?: string,
    lastName?: string,
    userType: string,
    userId?: number,
    isLogin: boolean,
    email?: string,
}