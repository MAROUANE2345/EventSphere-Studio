import { createSlice } from '@reduxjs/toolkit';
 
 

// const panierFromStorage = JSON.parse(localStorage.getItem("panier")) || [];
// const likedFromStorage = JSON.parse(localStorage.getItem("likedProducts")) || [];
 
const cart = JSON.parse(localStorage.getItem("panier")) || []
const calculateTotal = (cart) => {
  return cart.reduce((total, item) => {
    return total + item.priceTicket * item.qte;
  }, 0);
};

const initialState = {
 
 panier: cart,
 Show : false,
 Price : calculateTotal(cart),
 adminEmail : "Marouane@gmail.com",
 adminPassword : "123"
 
}; 

const cartSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    AddToCart : (state,action) =>{
         const existingEvent = state.panier.find(
        item => item.id === action.payload.id
      );

       if (existingEvent) {
        existingEvent.qte++;
      }else {
  state.panier.push({...action.payload , qte : 1} );

}
      state.Price = calculateTotal(state.panier);

localStorage.setItem('panier', JSON.stringify(state.panier))

    },

    DisplayCart : (state,action) =>{
        state.Show = !state.Show
    },

    Inc : (state,action ) => {
        const EventExisting = state.panier.find(
            item => item.id === action.payload
        )
        if(EventExisting){
            EventExisting.qte ++
        }
      state.Price = calculateTotal(state.panier);

    },

     Dec : (state,action ) => {
        const EventExisting = state.panier.find(
            item => item.id === action.payload
        )
        if(EventExisting){
            EventExisting.qte --
        }
      state.Price = calculateTotal(state.panier);

    },
    DeleteFromCart : (state,action) => {
         state.panier = state.panier.filter(
            item => item.id !== action.payload
        );
        localStorage.setItem('panier', JSON.stringify(state.panier))
        state.Price = calculateTotal(state.panier);
    }
  },
});

export const {
   AddToCart,
   DisplayCart,
   Inc,
   Dec,
   DeleteFromCart
} = cartSlice.actions;

export default cartSlice.reducer;
