import type { OrderItem } from '../types';

import { useState } from 'react';

export const useOrder = () => {
    const [order, setOrder] = useState<OrderItem[]>([]);
    
    const addItem = () => {
        console.log("agregando...");
    }

        return {
            addItem
        }
}