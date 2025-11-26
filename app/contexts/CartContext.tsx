'use client'
import React, { createContext, useContext, useReducer, ReactNode } from 'react'

interface Product {
  id: number
  name: string
  category: string
  price: number
  image: string
  isNew: boolean
  selectedSize?: string
}

interface CartItem extends Product {
  quantity: number
}

interface CartState {
  items: CartItem[]
  isOpen: boolean
}

type CartAction = 
  | { type: 'ADD_ITEM'; payload: Product & { quantity?: number } }
  | { type: 'REMOVE_ITEM'; payload: { id: number; selectedSize?: string } }
  | { type: 'UPDATE_QUANTITY'; payload: { id: number; quantity: number; selectedSize?: string } }
  | { type: 'CLEAR_CART' }
  | { type: 'TOGGLE_CART' }
  | { type: 'OPEN_CART' }
  | { type: 'CLOSE_CART' }

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const payload = action.payload
      const existingItem = state.items.find(item => item.id === payload.id && item.selectedSize === payload.selectedSize)

      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === payload.id && item.selectedSize === payload.selectedSize
              ? { ...item, quantity: item.quantity + (payload.quantity || 1) }
              : item
          )
        }
      }

      return {
        ...state,
        items: [...state.items, { ...payload, quantity: payload.quantity || 1 } as CartItem]
      }
    }
    
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(item => !(item.id === action.payload.id && item.selectedSize === action.payload.selectedSize))
      }
    
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id && item.selectedSize === action.payload.selectedSize
            ? { ...item, quantity: Math.max(0, action.payload.quantity) }
            : item
        ).filter(item => item.quantity > 0)
      }
    
    case 'CLEAR_CART':
      return {
        ...state,
        items: []
      }
    
    case 'TOGGLE_CART':
      return {
        ...state,
        isOpen: !state.isOpen
      }
    
    case 'OPEN_CART':
      return {
        ...state,
        isOpen: true
      }
    
    case 'CLOSE_CART':
      return {
        ...state,
        isOpen: false
      }
    
    default:
      return state
  }
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

interface CartContextType {
  state: CartState
  addItem: (product: Product) => void
  removeItem: (id: number) => void
  updateQuantity: (id: number, quantity: number) => void
  clearCart: () => void
  toggleCart: () => void
  openCart: () => void
  closeCart: () => void
  getTotalItems: () => number
  getTotalPrice: () => number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

interface CartProviderProps {
  children: ReactNode
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState)
  
  const addItem = (product: Product) => {
    dispatch({ type: 'ADD_ITEM', payload: product })
  }
  
  const removeItem = (id: number, selectedSize?: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id, selectedSize } })
  }
  
  const updateQuantity = (id: number, quantity: number, selectedSize?: string) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity, selectedSize } })
  }
  
  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }
  
  const toggleCart = () => {
    dispatch({ type: 'TOGGLE_CART' })
  }
  
  const openCart = () => {
    dispatch({ type: 'OPEN_CART' })
  }
  
  const closeCart = () => {
    dispatch({ type: 'CLOSE_CART' })
  }
  
  const getTotalItems = () => {
    return state.items.reduce((total, item) => total + item.quantity, 0)
  }
  
  const getTotalPrice = () => {
    return state.items.reduce((total, item) => total + (item.price * item.quantity), 0)
  }
  
  return (
    <CartContext.Provider value={{
      state,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      toggleCart,
      openCart,
      closeCart,
      getTotalItems,
      getTotalPrice
    }}>
      {children}
    </CartContext.Provider>
  )
}