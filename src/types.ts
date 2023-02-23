export interface iCatalogItem {
    title: string,
    price: number,
    id: string,
    purchasable: boolean,
}

export interface iUserCart {
    items: iCatalogItem[],
    total: number,
}

export interface iMessaging {
    status: 'success' | 'error' | 'loading' | '',
    message: String,
    active: boolean,
  }
